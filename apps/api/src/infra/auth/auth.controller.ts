import { Controller, Get, UseGuards, Req } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import type { Request } from 'express'
import { User } from '@prisma/client'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request & { user: User }) {
    return this.auth.login(req.user)
  }
}
