import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { BoardsModule } from './boards/boards.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { ConfigsModule } from './configs/configs.module';
import { HelpsModule } from './helps/helps.module';
import { MonitorsModule } from './monitors/monitors.module';

@Module({
  imports: [AuthModule, BoardsModule, BookmarksModule, ConfigsModule, HelpsModule, MonitorsModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
