import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  public login(user: User) {
    const payload = { sub: user.id, email: user.email }
    return {
      access_token: this.jwt.sign(payload),
    }
  }
}
