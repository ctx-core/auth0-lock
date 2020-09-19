import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { maybe_null } from '@ctx-core/function'
export const b__auth0Lock = _b('__auth0Lock', ()=>
	writable(null))
export const __auth0Lock = b__auth0Lock()
export type $type__logout_Auth0Lock = () => Promise<void>
export type $maybe_type__logout_Auth0Lock = maybe_null<$type__logout_Auth0Lock>
export type type__logout_Auth0Lock = Writable<$maybe_type__logout_Auth0Lock>
export const b__logout_Auth0Lock = _b<type__logout_Auth0Lock>('__logout_Auth0Lock', ()=>
	writable(null) as type__logout_Auth0Lock
)
export const __logout_Auth0Lock = b__logout_Auth0Lock()
export const b__AUTH0_CLIENT_ID = _b('__AUTH0_CLIENT_ID', ()=>
	writable(null))
export const __AUTH0_CLIENT_ID = b__AUTH0_CLIENT_ID()
export const b__AUTH0_DOMAIN = _b('__AUTH0_DOMAIN', ()=>
	writable(null))
export const __AUTH0_DOMAIN = b__AUTH0_DOMAIN()
