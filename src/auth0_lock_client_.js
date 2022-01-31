import Auth0Lock from 'auth0-lock'
import { AUTH0_CLIENT_ID$_, AUTH0_DOMAIN$_ } from '@ctx-core/auth0'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {Auth0LockConstructorOptions}options
 * @return {Auth0LockStatic}
 * @private
 */
export function auth0_lock_client_(ctx, options) {
	return new Auth0Lock(AUTH0_CLIENT_ID$_(ctx).$, AUTH0_DOMAIN$_(ctx).$, options)
}
