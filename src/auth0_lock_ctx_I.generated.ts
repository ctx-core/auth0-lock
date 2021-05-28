import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { auth0_lock_T } from './auth0_lock_b'
import { auth0_lock_b } from './auth0_lock_b'
import type { auth0_lock_client_fn_T } from './auth0_lock_client_fn_b'
import { auth0_lock_client_fn_b } from './auth0_lock_client_fn_b'
import type { logout_auth0_lock_T } from './logout_auth0_lock_b'
import { logout_auth0_lock_b } from './logout_auth0_lock_b'
export interface auth0_lock_ctx_I {
	auth0_lock?:auth0_lock_T
	auth0_lock_client_fn?:auth0_lock_client_fn_T
	logout_auth0_lock?:logout_auth0_lock_T
	auth0_lock_b_h?:auth0_lock_b_h_T
}
export interface auth0_lock_b_h_T {
	get auth0_lock():auth0_lock_T
	get auth0_lock_client_fn():auth0_lock_client_fn_T
	get logout_auth0_lock():logout_auth0_lock_T
}
export function auth0_loc_b_h_b(ctx:auth0_lock_ctx_I):B<auth0_lock_ctx_I, 'auth0_lock_b_h'> {
	return _b('auth0_lock_b_h', ()=>{
		return {
			get auth0_lock() { return auth0_lock_b(ctx) },
			get auth0_lock_client_fn() { return auth0_lock_client_fn_b(ctx) },
			get logout_auth0_lock() { return logout_auth0_lock_b(ctx) }
		}
	})
}
