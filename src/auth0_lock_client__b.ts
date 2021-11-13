import Auth0Lock from 'auth0-lock'
import { AUTH0_CLIENT_ID$_b, AUTH0_DOMAIN$_b } from '@ctx-core/auth0'
import { be_, B } from '@ctx-core/object'
import type { auth0_lock_Ctx } from './auth0_lock_Ctx.js'
const key = 'auth0_lock_client_'
export const auth0_lock_client__b:B<auth0_lock_Ctx, typeof key> = be_<auth0_lock_Ctx, typeof key>(key, ctx=>{
	const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID$_b(ctx)
	const AUTH0_DOMAIN = AUTH0_DOMAIN$_b(ctx)
	return auth0_lock_client_ as auth0_lock_client__T
	function auth0_lock_client_(options:Auth0LockConstructorOptions) {
		return (
			new Auth0Lock(AUTH0_CLIENT_ID.$, AUTH0_DOMAIN.$, options)
		)
	}
})
export type auth0_lock_client__T = (options:Auth0LockConstructorOptions)=>typeof Auth0Lock
