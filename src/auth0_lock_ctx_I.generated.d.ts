import type { auth0_lock$_T } from './auth0_lock$_b';
import type { auth0_lock_client__T } from './auth0_lock_client__b';
import type { logout_auth0_lock_T } from './logout_auth0_lock_b';
export interface auth0_lock_ctx_I {
    auth0_lock$?: auth0_lock$_T;
    auth0_lock_client_?: auth0_lock_client__T;
    logout_auth0_lock?: logout_auth0_lock_T;
    auth0_lock_b_h?: auth0_lock_b_h_T;
}
export interface auth0_lock_b_h_T {
    get auth0_lock$(): auth0_lock$_T;
    get auth0_lock_client_(): auth0_lock_client__T;
    get logout_auth0_lock(): logout_auth0_lock_T;
}
export declare function auth0_lock_b_h_b(ctx: auth0_lock_ctx_I): auth0_lock_b_h_T;
