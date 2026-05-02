import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // Tambahkan metode atau logika yang diperlukan
  validateUser(username: string, password: string): boolean {
    // Contoh implementasi sederhana
    return username === 'admin' && password === '12345';
  }
}