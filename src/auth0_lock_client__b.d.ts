import Auth0Lock from 'auth0-lock';
import { B } from '@ctx-core/object';
import type { auth0_lock_Ctx } from './auth0_lock_Ctx';
declare const key = "auth0_lock_client_";
export declare const auth0_lock_client__b: B<auth0_lock_Ctx, typeof key>;
export declare type auth0_lock_client__T = (options: Auth0LockConstructorOptions) => typeof Auth0Lock;
export {};
