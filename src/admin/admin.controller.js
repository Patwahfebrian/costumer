"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
@(0, common_1.Controller)('admin')
class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    @(0, common_1.Post)('login')
    login(
    @(0, common_1.Body)()
    loginDto) {
        return this.adminService.validateAdmin(loginDto);
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map