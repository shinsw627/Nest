import { MonitorsService } from './monitors.service';
import { Body, Controller, Get, Req } from '@nestjs/common';

@Controller('/monitors')
export class MonitorsController {
  constructor(private readonly monitorsService: MonitorsService) {}

  // 모니터 목록 조회
  @Get()
  getMonitors(@Req() Req, @Body() Body) {}
}
