import { ConfigsService } from './configs.service';
import { Body, Controller, Get, Put, Req } from '@nestjs/common';

@Controller('/configs')
export class ConfigsController {
  constructor(private readonly configsService: ConfigsService) {}

  // 모든 즐겨찾기 조회
  @Put()
  putConfig(@Req() req: Request, @Body() Body) {}
}
