import type Auth0Lock from 'auth0-lock'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, B } from '@ctx-core/object'
const key = 'auth0_lock$'
export const auth0_lock$_b:B<auth0_lock$_T> = be_(key, ()=>
	atom$<$auth0_lock_T|undefined>(undefined) as auth0_lock$_T
)
export type $auth0_lock_T = typeof Auth0Lock
export type auth0_lock$_T = WritableAtom$<$auth0_lock_T|undefined>
export {
	auth0_lock$_b as b__auth0_lock,
}
