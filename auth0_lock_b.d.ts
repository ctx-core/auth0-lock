import type Auth0Lock from 'auth0-lock';
import { B } from '@ctx-core/object';
import { Writable } from '@ctx-core/store';
export declare const auth0_lock_b: auth0_lock_b_type;
export declare type $auth0_lock_type = typeof Auth0Lock;
export interface auth0_lock_type extends Writable<$auth0_lock_type | null> {
}
export interface auth0_lock_b_type extends B<auth0_lock_type> {
}
export { auth0_lock_b as b__auth0_lock, };
