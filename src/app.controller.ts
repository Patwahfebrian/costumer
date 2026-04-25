import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('barang')
  getBarang(): string {
    return 'solar pertamina bulukumba';
  }

  @Post('barang/masuk')
  barangMasuk(): string {
    return 'solar masuk';
  }

  @Post('barang/keluar')
  barangKeluar(): string {
    return 'solar keluar';
  }
}