import { B } from '@ctx-core/object';
import type { logout_auth0_lock_params_I } from './logout_auth0_lock_params_I';
import type { auth0_lock_Ctx } from './auth0_lock_Ctx';
declare const key = "logout_auth0_lock";
export declare const logout_auth0_lock_b: B<auth0_lock_Ctx, typeof key>;
export declare type logout_auth0_lock_T = (opts: logout_auth0_lock_params_I) => Promise<void>;
export {};
