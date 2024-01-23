import { type CustomDecorator, SetMetadata } from '@nestjs/common';
import { type ERoles } from '../types';

/**
 * @decorator `@Roles()`
 * @remarks This decorator is used to set the metadata for the roles.
 * @param roles - The roles to be used.
 * @returns The metadata.
 * @alpha
 * 
 * @example
 * ```ts
 * @Roles(ERoles.ADMIN, ERoles.SUPER_ADMIN)
 * @Get()
 * public async get(): Promise<unknown> {
 *  return 'Hello World!';
 * }
 * ```
 */
export const Roles = (...roles: Array<ERoles>): CustomDecorator<string> =>
  SetMetadata('roles', roles);
