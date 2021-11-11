import { be_, assign, B } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { error_ctx_I, throw_missing_argument } from '@ctx-core/error'
import { AUTH0_CLIENT_ID$_b, auth0_token$_b } from '@ctx-core/auth0'
import { auth0_lock$_b } from './auth0_lock$_b.js'
import type { logout_auth0_lock_params_I } from './logout_auth0_lock_params_I.js'
import type { auth0_lock_Ctx } from './auth0_lock_Ctx'
const key = 'logout_auth0_lock'
export const logout_auth0_lock_b:B<auth0_lock_Ctx, typeof key> = be_<auth0_lock_Ctx, typeof key>(key, ctx=>{
	const auth0_token$ = auth0_token$_b(ctx)
	const auth0_lock$ = auth0_lock$_b(ctx)
	const AUTH0_CLIENT_ID$ = AUTH0_CLIENT_ID$_b(ctx)
	return logout_auth0_lock as logout_auth0_lock_T
	async function logout_auth0_lock(in_opts:logout_auth0_lock_params_I) {
		const auth0_lock = auth0_lock$.$
		if (auth0_lock) {
			const opts = assign(
				{ client_id: get(AUTH0_CLIENT_ID$) },
				in_opts
			) as logout_auth0_lock_params_I
			if (!opts.returnTo)
				throw_missing_argument({ key: 'opts.returnTo' } as error_ctx_I)
			auth0_token$.clear_auth0_token()
			auth0_lock.logout(opts)
		}
	}
})
export type logout_auth0_lock_T = (opts:logout_auth0_lock_params_I)=>Promise<void>
