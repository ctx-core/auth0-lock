import { _b, assign, B } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { error_ctx_type, throw_missing_argument } from '@ctx-core/error'
import { AUTH0_CLIENT_ID_b, auth0_token_b } from '@ctx-core/auth0'
import { auth0_lock_b } from './auth0_lock_b'
import type { logout_auth0_lock_opts_type } from './logout_auth0_lock_opts_type'
export const logout_auth0_lock_b:logout_auth0_lock_b_type = _b('logout_auth0_lock', (ctx)=>{
	const auth0_token = auth0_token_b(ctx)
	const auth0_lock = auth0_lock_b(ctx)
	const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
	return logout_auth0_lock as logout_auth0_lock_type
	async function logout_auth0_lock(in_opts:logout_auth0_lock_opts_type) {
		const Auth0Lock = get(auth0_lock)
		if (Auth0Lock) {
			const opts = assign(
				{ client_id: get(AUTH0_CLIENT_ID) },
				in_opts
			) as logout_auth0_lock_opts_type
			if (!opts.returnTo)
				throw_missing_argument({ key: 'opts.returnTo' } as error_ctx_type)
			auth0_token.clear_auth0_token()
			Auth0Lock.logout(opts)
		}
	}
})
export type logout_auth0_lock_type = (opts:logout_auth0_lock_opts_type)=>Promise<void>
export interface logout_auth0_lock_b_type extends B<logout_auth0_lock_type> {}
