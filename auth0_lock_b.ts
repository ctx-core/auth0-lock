import type Auth0Lock from 'auth0-lock'
import { _b } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
export const auth0_lock_b = _b('auth0_lock', ()=>
	writable<$auth0_lock_type|null>(null) as auth0_lock_type
)
export type $auth0_lock_type = typeof Auth0Lock
export interface auth0_lock_type extends Writable<$auth0_lock_type|null> {}
export {
	auth0_lock_b as b__auth0_lock,
}
