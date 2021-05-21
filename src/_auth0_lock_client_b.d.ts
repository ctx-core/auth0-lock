import Auth0Lock from 'auth0-lock';
import { AUTH0_CLIENT_ID_ctx_I, AUTH0_DOMAIN_ctx_I } from '@ctx-core/auth0';
export interface _auth0_lock_client_ctx_I extends AUTH0_CLIENT_ID_ctx_I, AUTH0_DOMAIN_ctx_I {
    _auth0_lock_client?: _auth0_lock_client_T;
}
export declare const _auth0_lock_client_b: import("@ctx-core/object").Be<_auth0_lock_client_ctx_I, "_auth0_lock_client">;
export declare type _auth0_lock_client_T = (options: Auth0LockConstructorOptions) => typeof Auth0Lock;
