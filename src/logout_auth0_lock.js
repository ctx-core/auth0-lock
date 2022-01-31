import { AUTH0_CLIENT_ID$_, auth0_token$_ } from '@ctx-core/auth0'
import { throw_missing_argument } from '@ctx-core/error'
import { assign } from '@ctx-core/object'
import { auth0_lock$_ } from './auth0_lock$_.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./_types').logout_auth0_lock_params_I}in_opts
 * @return {Promise<void>}
 */
export async function logout_auth0_lock(ctx, in_opts) {
	const auth0_lock = auth0_lock$_(ctx).$
	if (auth0_lock) {
		const opts = assign({
			client_id: AUTH0_CLIENT_ID$_(ctx).$
		}, in_opts)
		if (!opts.returnTo) throw_missing_argument({
			key: 'opts.returnTo'
		})
		auth0_token$_(ctx).clear_auth0_token()
		auth0_lock.logout(opts)
	}
}
