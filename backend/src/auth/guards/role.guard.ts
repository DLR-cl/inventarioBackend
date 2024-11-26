import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private readonly _reflector: Reflector,
  ){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const requieredRoles = this._reflector.getAllAndOverride("roles", [
      context.getHandler(),
      context.getClass(),
    ]);

    if(!requieredRoles){
      return true;
    }
    return true;
  }
}
