import { BookmarksService } from './bookmarks.service';
import { Body, Controller, Get, Put, Req } from '@nestjs/common';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  // 모든 즐겨찾기 조회
  @Get()
  getAllBookmark(@Req() req: Request, @Body() Body) {}

  // 즐겨찾기 추가/삭제
  @Put('monitors/:id')
  putBookmarkById(@Req() req: Request, @Body() Body) {}
}
