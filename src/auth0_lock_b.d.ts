import type Auth0Lock from 'auth0-lock';
import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
export declare const auth0_lock_b: auth0_lock_b_T;
export interface auth0_lock_ctx_I {
    auth0_lock?: auth0_lock_T;
}
export declare type $auth0_lock_T = typeof Auth0Lock;
export interface auth0_lock_T extends Writable$<$auth0_lock_T | undefined> {
}
export interface auth0_lock_b_T extends B<auth0_lock_T> {
}
export { auth0_lock_b as b__auth0_lock, };
