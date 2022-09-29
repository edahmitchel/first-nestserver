import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RoleController } from './user/controllers/role/role.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, RoleController],
  providers: [AppService, UserService],
})
export class AppModule {}
