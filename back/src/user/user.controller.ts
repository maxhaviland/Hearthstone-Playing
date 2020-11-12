import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get('/:username')
  getByUsername(@Param() { username }) {
    return this.service.findByUsername(username);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.create(user);
  }

  @Put('/:id')
  update(@Body() user: User, @Param() params) {
    return this.service.update(params.id, user);
  }

  @Delete('/:id')
  remove(@Param() params) {
    return this.service.remove(params.id);
  }
}
