import type Auth0Lock from 'auth0-lock'
import { _b, B } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
export const auth0_lock_b:auth0_lock_b_T = _b('auth0_lock', ()=>
	writable$<$auth0_lock_T|undefined>(undefined) as auth0_lock_T
)
export interface auth0_lock_ctx_I {
	auth0_lock?:auth0_lock_T
}
export type $auth0_lock_T = typeof Auth0Lock
export interface auth0_lock_T extends Writable$<$auth0_lock_T|undefined> {}
export interface auth0_lock_b_T extends B<auth0_lock_T> {}
export {
	auth0_lock_b as b__auth0_lock,
}
