import { createParamDecorator, type ExecutionContext } from '@nestjs/common';

/**
 * @decorator `@CurrentUser()`
 * @remarks This decorator is used to get the current user.
 * @returns The user.
 * @alpha
 * 
 * @example
 * ```ts
 * @Get()
 * public async get(@CurrentUser() user: User): Promise<unknown> {
 *  return user;
 * }
 * ```
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
