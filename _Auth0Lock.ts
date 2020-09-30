import Auth0Lock from 'auth0-lock'
import { get } from '@ctx-core/store'
import { __AUTH0_CLIENT_ID, __AUTH0_DOMAIN } from './store'
export function _Auth0Lock(options) {
	return (
		new Auth0Lock(
			get(__AUTH0_CLIENT_ID),
			get(__AUTH0_DOMAIN),
			options,
		)
	)
}
