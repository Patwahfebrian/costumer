import { AuthService } from '../service/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: any): {
        status: boolean;
        message: string;
    };
}
//# sourceMappingURL=auth.controller.d.ts.map