import { type CustomDecorator, SetMetadata } from '@nestjs/common';
import { type EPUBLIC_KEY } from '../types';

export const IS_PUBLIC_KEY: EPUBLIC_KEY = 'isPublic';

/**
 * @decorator `@Public()`
 * @remarks This decorator is used to set the metadata for the public key.
 * @returns The metadata.
 * @alpha
 * 
 * @example
 * ```ts
 * @Public()
 * @Get()
 * public async get(): Promise<unknown> {
 * return 'Hello World!';
 * }
 * ```
 */
export const Public = (): CustomDecorator<string> =>
  SetMetadata(IS_PUBLIC_KEY, true);
