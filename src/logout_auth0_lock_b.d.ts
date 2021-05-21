import { AUTH0_CLIENT_ID_ctx_I, auth0_token_ctx_I } from '@ctx-core/auth0';
import { auth0_lock_ctx_I } from './auth0_lock_b';
import type { logout_auth0_lock_params_I } from './logout_auth0_lock_params_I';
export interface logout_auth0_lock_ctx_I extends auth0_token_ctx_I, auth0_lock_ctx_I, AUTH0_CLIENT_ID_ctx_I {
    logout_auth0_lock?: logout_auth0_lock_T;
}
export declare const logout_auth0_lock_b: import("@ctx-core/object").Be<logout_auth0_lock_ctx_I, "logout_auth0_lock">;
export declare type logout_auth0_lock_T = (opts: logout_auth0_lock_params_I) => Promise<void>;
