import type Auth0Lock from 'auth0-lock';
import { Writable$ } from '@ctx-core/store';
export interface auth0_lock_Ctx {
    auth0_lock?: auth0_lock_T;
}
export declare const auth0_lock_b: import("@ctx-core/object").Be<auth0_lock_Ctx, "auth0_lock", auth0_lock_T>;
export declare type $auth0_lock_T = typeof Auth0Lock;
export interface auth0_lock_T extends Writable$<$auth0_lock_T | undefined> {
}
export { auth0_lock_b as b__auth0_lock, };
