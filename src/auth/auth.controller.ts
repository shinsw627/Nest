import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 로그인
  @Post('/login')
  loginUser(@Req() req: Request, @Body() Body) {}

  // 로그아웃
  @Get('/logout')
  logoutUser() {}
}
