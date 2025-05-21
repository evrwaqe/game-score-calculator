import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../repository'

@Injectable()
class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private config: ConfigService,
    private prismaService: PrismaService,
  ) {
    super({
      clientID: config.get('GOOGLE_CLIENT_ID')!,
      clientSecret: config.get('GOOGLE_CLIENT_SECRET')!,
      callbackURL: `${config.get('API_URL')}/auth/google/callback`,
      scope: ['email', 'profile'],
      passReqToCallback: true,
    })
  }

  public async validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const { emails, displayName, photos } = profile
    const email = emails[0].value

    const user = await this.prismaService.user.upsert({
      where: { email },
      update: { name: displayName, avatar: photos[0].value },
      create: {
        email,
        name: displayName,
        avatar: photos[0].value,
      },
    })
    done(null, user)
  }
}

export { GoogleStrategy }
