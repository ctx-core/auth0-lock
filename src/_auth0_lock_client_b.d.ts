import Auth0Lock from 'auth0-lock';
import { B } from '@ctx-core/object';
import type { auth0_lock_Ctx } from './auth0_lock_Ctx';
declare const key = "_auth0_lock_client";
export declare const _auth0_lock_client_b: B<auth0_lock_Ctx, typeof key>;
export declare type _auth0_lock_client_T = (options: Auth0LockConstructorOptions) => typeof Auth0Lock;
export {};
