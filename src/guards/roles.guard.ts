import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

/**
 * @remarks This class is a guard for the roles.
 * @param context - The context to be used.
 * @returns The boolean.
 * @alpha
 * @example App module with roles guard implementation.
 * ```ts
 * import { Module } from '@nestjs/common';
 * import { APP_GUARD } from '@nestjs/core';
 * import { RolesGuard } from '@hivary/engine-utils';
 * import { AppController } from './app.controller';
 * import { AppService } from './app.service';
 * 
 * @Module({
 *   imports: [],
 *   controllers: [AppController],
 *   providers: [
 *     AppService,
 *     {
 *       provide: APP_GUARD,
 *       useClass: RolesGuard,
 *     },
 *   ],
 * })
 * export class AppModule {}
 * ```
 * @example App controller with roles guard.
 * ```ts
 *import { Controller, Get } from '@nestjs/common';
 *import { AppService } from './app.service';
 *import { Roles,type ERoles } from '@hivary/engine-utils';
 *
 *@Controller()
 *export class AppController {
 *  constructor(private readonly appService: AppService) {}
 *
 *  @Get('/example')
 *  @Roles(ERoles.ADMIN, ERoles.USER)
 *  getHello(): string {
 *    return this.appService.getHello();
 *  }
 *}
 * ```
 */
@Injectable()
export class RolesGuard implements CanActivate {
  public constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role: string) => user.role.includes(role));
  }
}
