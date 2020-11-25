import { _b, assign } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { error_ctx_type, throw_missing_argument } from '@ctx-core/error'
import { AUTH0_CLIENT_ID_b, auth0_token_b } from '@ctx-core/auth0'
import { auth0_lock_b } from './auth0_lock_b'
import type { logout_auth0_lock_opts_type } from './logout_auth0_lock_opts_type'
export const logout_auth0_lock_b = _b(
	'logout_auth0_lock', (ctx)=>{
		const auth0_token = auth0_token_b(ctx)
		const auth0_lock = auth0_lock_b(ctx)
		const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
		return async function logout_auth0_lock(...opts_a1:Partial<logout_auth0_lock_opts_type>[]) {
			const Auth0Lock = get(auth0_lock)
			if (Auth0Lock) {
				const opts = assign(
					{ client_id: get(AUTH0_CLIENT_ID) },
					...opts_a1
				) as logout_auth0_lock_opts_type
				if (!opts.returnTo)
					throw_missing_argument({ key: 'opts.returnTo' } as error_ctx_type)
				auth0_token.clear_auth0_token()
				Auth0Lock.logout(opts)
			}
		}
	})
