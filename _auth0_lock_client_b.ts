import Auth0Lock from 'auth0-lock'
import { get } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
import { AUTH0_CLIENT_ID_b, AUTH0_DOMAIN_b } from '@ctx-core/auth0'
export const _auth0_lock_client_b = _b(
	'_auth0_lock_client', (ctx)=>{
		const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
		const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
		return function _auth0_lock_client(options) {
			return (
				new Auth0Lock(
					get(AUTH0_CLIENT_ID),
					get(AUTH0_DOMAIN),
					options,
				)
			)
		}
	})
