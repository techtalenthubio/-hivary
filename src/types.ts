/**
 * Enum representing the roles in the system.
 * @alpha
 */
export const ERoles = {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  USER: 'USER',
  SUPER_USER: 'SUPER_USER',
  GUEST: 'GUEST'
} as const;

/**
 * Enum representing the roles in the system.
 * @alpha
 */
export const EPUBLIC_KEY = 'isPublic' as const;

/**
 * Type representing the value of an object.
 * @alpha
 * @remarks This type is used to represent the value of an object.
 * @example
 * ```ts
 * const value = { key: 'value' };
 * type Value = TOV<typeof value>;
 * ```
 */
export type TOV<T> = T[keyof T];

/**
 * Enum representing the roles in the system.
 * @alpha
 * @remarks This enum is used to represent the roles in the system.
 * @example
 * ```ts
 * const role = ERoles.ADMIN | ERoles.SUPER_ADMIN | ERoles.USER | ERoles.SUPER_USER | ERoles.GUEST;
 * ```
 */
export type ERoles = TOV<typeof ERoles>;

/**
 * Enum representing the public key in the system.
 * @alpha
 * @remarks This enum is used to represent the public key in the system.
 */
export type EPUBLIC_KEY = typeof EPUBLIC_KEY;

/**
 * Type representing the maybe value of an object.
 * @alpha
 * @remarks This type is used to represent the maybe value of an object.
 * @example
 * ```ts
 * const maybe = (value: string | null | undefined): Maybe<string> => value;
 * ```
 */
export type Maybe<T> = T | null | undefined;
