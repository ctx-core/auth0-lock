import Auth0Lock from 'auth0-lock'
import { _b, B } from '@ctx-core/object'
import { AUTH0_CLIENT_ID_b, AUTH0_DOMAIN_b } from '@ctx-core/auth0'
import type { auth0_lock_Ctx } from './auth0_lock_Ctx'
const key = 'auth0_lock_client_fn'
export const auth0_lock_client_fn_b:B<auth0_lock_Ctx, typeof key> = _b<auth0_lock_Ctx, typeof key>(key, ctx=>{
	const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID_b(ctx)
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return auth0_lock_client_fn as auth0_lock_client_fn_T
	function auth0_lock_client_fn(options:Auth0LockConstructorOptions) {
		return (
			new Auth0Lock(AUTH0_CLIENT_ID.$, AUTH0_DOMAIN.$, options)
		)
	}
})
export type auth0_lock_client_fn_T = (options:Auth0LockConstructorOptions)=>typeof Auth0Lock
