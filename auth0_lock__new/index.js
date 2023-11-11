import { AUTH0_CLIENT_ID_, AUTH0_DOMAIN$_ } from '@ctx-core/auth0'
import Auth0Lock from 'auth0-lock'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {Auth0LockConstructorOptions}options
 * @return {Auth0LockStatic}
 * @private
 */
export function auth0_lock__new(
	ctx, options
) {
	return new Auth0Lock(AUTH0_CLIENT_ID_(ctx), AUTH0_DOMAIN$_(ctx).$, options)
}
export {
	auth0_lock__new as auth0_lock__client_,
	auth0_lock__new as auth0_lock_client_,
}
