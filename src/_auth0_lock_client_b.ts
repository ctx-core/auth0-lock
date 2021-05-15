import Auth0Lock from 'auth0-lock'
import { _b, B } from '@ctx-core/object'
import { AUTH0_CLIENT_ID_b, AUTH0_CLIENT_ID_ctx_I, AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from '@ctx-core/auth0'
export const _auth0_lock_client_b:_auth0_lock_client_b_T = _b('_auth0_lock_client', (
	ctx:_auth0_lock_client_ctx_I
)=>{
	const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return _auth0_lock_client as _auth0_lock_client_T
	function _auth0_lock_client(options:Auth0LockConstructorOptions) {
		return (
			new Auth0Lock(AUTH0_CLIENT_ID.$, AUTH0_DOMAIN.$, options)
		)
	}
})
export interface _auth0_lock_client_ctx_I
	extends AUTH0_CLIENT_ID_ctx_I, AUTH0_DOMAIN_ctx_I {
	_auth0_lock_client?:_auth0_lock_client_T
}
export type _auth0_lock_client_T = (options:Auth0LockConstructorOptions)=>typeof Auth0Lock
export interface _auth0_lock_client_b_T extends B<_auth0_lock_client_T> {}
