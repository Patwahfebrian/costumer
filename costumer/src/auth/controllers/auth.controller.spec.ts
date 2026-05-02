import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller'; // Tambahkan impor ini
import { AuthService } from '../services/auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService], // Tambahkan AuthService jika diperlukan
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});