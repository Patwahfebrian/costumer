import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    login(loginDto: any): {
        status: string;
        message: string;
        role: string;
    } | {
        status: string;
        message: string;
        role?: never;
    };
}
//# sourceMappingURL=admin.controller.d.ts.map