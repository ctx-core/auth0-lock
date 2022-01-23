import { AUTH0_CLIENT_ID$_b, auth0_token$_b } from '@ctx-core/auth0'
import { throw_missing_argument } from '@ctx-core/error'
import { be_, assign } from '@ctx-core/object'
import { auth0_lock$_b } from './auth0_lock$_b.js'
const key = 'logout_auth0_lock'
/** @type {import('./logout_auth0_lock_b.d.ts').logout_auth0_lock_b} */
export const logout_auth0_lock_b = be_(key, ctx=>{
	const auth0_token$ = auth0_token$_b(ctx)
	const auth0_lock$ = auth0_lock$_b(ctx)
	const AUTH0_CLIENT_ID$ = AUTH0_CLIENT_ID$_b(ctx)
	return logout_auth0_lock
	async function logout_auth0_lock(in_opts) {
		const auth0_lock = auth0_lock$.$
		if (auth0_lock) {
			const opts = assign({
				client_id: AUTH0_CLIENT_ID$.$
			}, in_opts)
			if (!opts.returnTo) throw_missing_argument({
				key: 'opts.returnTo'
			})
			auth0_token$.clear_auth0_token()
			auth0_lock.logout(opts)
		}
	}
})
