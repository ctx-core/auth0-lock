import { get } from 'svelte/store'
import { __AUTH0_CLIENT_ID, __auth0Lock } from './store'
import { assign } from '@ctx-core/object'
import { error_ctx_type, throw_missing_argument } from '@ctx-core/error'
import { clear__token__auth0 } from '@ctx-core/auth0'
export async function logout_Auth0Lock(...opts_a1: Partial<Auth0Lock_logout_opts_type>[]) {
	const Auth0Lock = get(__auth0Lock)
	if (Auth0Lock) {
		const opts = assign(
			{ client_id: get(__AUTH0_CLIENT_ID) } as Partial<Auth0Lock_logout_opts_type>,
			...opts_a1
		) as Auth0Lock_logout_opts_type
		if (!opts.returnTo)
			throw_missing_argument({ key: 'opts.returnTo' } as error_ctx_type)
		clear__token__auth0()
		Auth0Lock.logout(opts)
	}
}
