import { Body, Controller, Get, Param, Put, Req } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  // 대시보드 조회
  @Get()
  getAllBoard(@Req() req: Request, @Body() Body) {}

  // 특정 대시보드 조회
  @Get('/:id')
  getBoardById(@Req() req: Request, @Body() Body, @Param() Param) {}

  // 대시보드 수정
  @Put('/:id')
  updateBoardById(@Req() req: Request, @Body() Body, @Param() Param) {}
}
