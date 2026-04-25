import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  // Blueprint method untuk validasi login sederhana
  validateAdmin(payload: any) {
    const { username, password } = payload;
    
    // Simulasi pengecekan (Nanti disempurnakan dengan Database di minggu depan)
    if (username === 'admin' && password === 'scm_secret_2026') {
      return {
        status: 'Success',
        message: 'Login Berhasil - Akses Dashboard SCM Terbuka',
        role: 'Super Admin'
      };
    }
    return { status: 'Error', message: 'Kredensial Salah' };
  }
}