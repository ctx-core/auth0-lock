/// <reference types="ctx-core" />
/// <reference types="../types/index.d.ts" />
import { auth0__token__clear, AUTH0_CLIENT_ID_ } from '@ctx-core/auth0'
import { missing_argument__throw } from 'ctx-core/error'
import { auth0_lock__ } from '../auth0_lock__/index.js'
/**
 * @param {ctx_T}ctx
 * @param {auth0_lock__logout__params_T}params
 * @return {Promise<void>}
 */
export async function auth0_lock__logout(
	ctx,
	params
) {
	const auth0_lock = auth0_lock__(ctx).$
	if (auth0_lock) {
		const opts = {
			client_id: AUTH0_CLIENT_ID_(ctx),
			...params
		}
		if (!opts.returnTo) missing_argument__throw({
			key: 'opts.returnTo'
		})
		auth0__token__clear(ctx)
		auth0_lock.logout(opts)
	}
}
export {
	auth0_lock__logout as logout_auth0_lock,
}
