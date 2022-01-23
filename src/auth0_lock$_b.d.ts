import type Auth0Lock from 'auth0-lock'
import { WritableAtom$ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
export declare const auth0_lock$_b:B<auth0_lock$_T>
export declare type $auth0_lock_T = typeof Auth0Lock;
export declare type auth0_lock$_T = WritableAtom$<$auth0_lock_T|undefined>;
export { auth0_lock$_b as b__auth0_lock, }