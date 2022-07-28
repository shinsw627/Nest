import { HelpsService } from './helps.service';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';

@Controller('/helps')
export class HelpsController {
  constructor(private readonly helpsService: HelpsService) {}

  // 비밀번호 찾기 인증코드 발송
  @Post('/pw')
  findPwGetAuthcode(@Req() req: Request, @Body() Body) {}

  // 인증코드 검증
  @Post('/check')
  findPwAuthBycode(@Req() req: Request, @Body() Body) {}
}
