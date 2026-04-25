"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../service/auth.service");
@(0, common_1.Controller)('auth')
class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    @(0, common_1.Post)('login')
    login(
    @(0, common_1.Body)()
    body) {
        return this.authService.login(body);
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map