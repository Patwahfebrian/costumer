"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
@(0, common_1.Module)({
    controllers: [admin_controller_1.AdminController],
    providers: [admin_service_1.AdminService]
})
class AdminModule {
}
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map