import { Body, Controller, Post } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly _authService: AuthService,
    ){}
    @Post('login')
    public login(@Body() dataPayload: AuthPayloadDto) {
        return this._authService.validateUser(dataPayload);
    }
}
