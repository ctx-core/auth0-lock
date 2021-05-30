import type Auth0Lock from 'auth0-lock'
import { _b, B } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { auth0_lock_Ctx } from './auth0_lock_Ctx'
const key = 'auth0_lock$'
export const auth0_lock$_b:B<auth0_lock_Ctx, typeof key> = _b(key, ()=>
	writable$<$auth0_lock_T|undefined>(undefined) as auth0_lock$_T
)
export type $auth0_lock_T = typeof Auth0Lock
export interface auth0_lock$_T extends Writable$<$auth0_lock_T|undefined> {}
export {
	auth0_lock$_b as b__auth0_lock,
}
