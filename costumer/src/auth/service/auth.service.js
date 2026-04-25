"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Injectable)()
class AuthService {
    login(data) {
        const { username, password } = data;
        if (!username || !password) {
            return { status: false, message: 'Invalid input' };
        }
        if (username === 'admin' && password === '123') {
            return { status: true, message: 'Success' };
        }
        return { status: false, message: 'Failed' };
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map