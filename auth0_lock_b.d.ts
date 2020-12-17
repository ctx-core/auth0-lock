import type Auth0Lock from 'auth0-lock';
import { Writable } from '@ctx-core/store';
export declare const auth0_lock_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => auth0_lock_type;
export declare type $auth0_lock_type = typeof Auth0Lock;
export interface auth0_lock_type extends Writable<$auth0_lock_type | null> {
}
export { auth0_lock_b as b__auth0_lock, };
