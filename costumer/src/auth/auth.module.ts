import { Module } from '@nestjs/common';
import { AuthController } from './service/controller/auth.controller';

@Module({
  controllers: [AuthController]
})
export class AuthModule {}
