import { B } from '@ctx-core/object';
import { AUTH0_CLIENT_ID_ctx_I, auth0_token_ctx_I } from '@ctx-core/auth0';
import { auth0_lock_ctx_I } from './auth0_lock_b';
import type { logout_auth0_lock_params_I } from './logout_auth0_lock_params_I';
export declare const logout_auth0_lock_b: logout_auth0_lock_b_T;
export interface logout_auth0_lock_ctx_I extends auth0_token_ctx_I, auth0_lock_ctx_I, AUTH0_CLIENT_ID_ctx_I {
    logout_auth0_lock?: logout_auth0_lock_T;
}
export declare type logout_auth0_lock_T = (opts: logout_auth0_lock_params_I) => Promise<void>;
export interface logout_auth0_lock_b_T extends B<logout_auth0_lock_T> {
}
