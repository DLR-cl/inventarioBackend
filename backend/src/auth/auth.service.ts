import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

    public validateUser(authPayload: AuthPayloadDto){
        
    }
}
