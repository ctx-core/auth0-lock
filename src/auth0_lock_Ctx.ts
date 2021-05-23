import type { _auth0_lock_client_T } from './_auth0_lock_client_b'
import type { auth0_lock_T } from './auth0_lock_b'
import type { logout_auth0_lock_T } from './logout_auth0_lock_b'
import type { auth0_Ctx } from '@ctx-core/auth0/src/auth0_Ctx'
export interface auth0_lock_Ctx extends auth0_Ctx {
	_auth0_lock_client?:_auth0_lock_client_T
	auth0_lock?:auth0_lock_T
	logout_auth0_lock?:logout_auth0_lock_T
}
