import { AUTH0_CLIENT_ID_Ctx, auth0_token_Ctx } from '@ctx-core/auth0';
import { auth0_lock_Ctx } from './auth0_lock_b';
import type { logout_auth0_lock_params_I } from './logout_auth0_lock_params_I';
export interface logout_auth0_lock_Ctx extends auth0_token_Ctx, auth0_lock_Ctx, AUTH0_CLIENT_ID_Ctx {
    logout_auth0_lock?: logout_auth0_lock_T;
}
export declare const logout_auth0_lock_b: import("@ctx-core/object").Be<logout_auth0_lock_Ctx, "logout_auth0_lock">;
export declare type logout_auth0_lock_T = (opts: logout_auth0_lock_params_I) => Promise<void>;
