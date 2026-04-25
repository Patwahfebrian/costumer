"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Injectable)()
class AdminService {
    // Blueprint method untuk validasi login sederhana
    validateAdmin(payload) {
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
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map