import { _b, assign } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { error_ctx_I, throw_missing_argument } from '@ctx-core/error'
import {
	AUTH0_CLIENT_ID_b, AUTH0_CLIENT_ID_ctx_I, auth0_token_b, auth0_token_ctx_I
} from '@ctx-core/auth0'
import { auth0_lock_b, auth0_lock_ctx_I } from './auth0_lock_b'
import type { logout_auth0_lock_params_I } from './logout_auth0_lock_params_I'
const key = 'logout_auth0_lock'
export interface logout_auth0_lock_ctx_I
	extends auth0_token_ctx_I,
		auth0_lock_ctx_I,
		AUTH0_CLIENT_ID_ctx_I {
	logout_auth0_lock?:logout_auth0_lock_T
}
export const logout_auth0_lock_b = _b<logout_auth0_lock_ctx_I, typeof key>(key, ctx=>{
	const auth0_token = auth0_token_b(ctx)
	const auth0_lock = auth0_lock_b(ctx)
	const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
	return logout_auth0_lock as logout_auth0_lock_T
	async function logout_auth0_lock(in_opts:logout_auth0_lock_params_I) {
		const Auth0Lock = get(auth0_lock)
		if (Auth0Lock) {
			const opts = assign(
				{ client_id: get(AUTH0_CLIENT_ID) },
				in_opts
			) as logout_auth0_lock_params_I
			if (!opts.returnTo)
				throw_missing_argument({ key: 'opts.returnTo' } as error_ctx_I)
			auth0_token.clear_auth0_token()
			Auth0Lock.logout(opts)
		}
	}
})
export type logout_auth0_lock_T = (opts:logout_auth0_lock_params_I)=>Promise<void>
