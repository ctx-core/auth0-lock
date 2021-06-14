import type Auth0Lock from 'auth0-lock';
import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { auth0_lock_Ctx } from './auth0_lock_Ctx';
declare const key = "auth0_lock$";
export declare const auth0_lock$_b: B<auth0_lock_Ctx, typeof key>;
export declare type $auth0_lock_T = typeof Auth0Lock;
export interface auth0_lock$_T extends Writable$<$auth0_lock_T | undefined> {
}
export { auth0_lock$_b as b__auth0_lock, };
