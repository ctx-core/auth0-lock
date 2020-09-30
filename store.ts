import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type Auth0Lock from 'auth0-lock'
export const b__auth0Lock = _b('__auth0Lock', ()=>
	writable<$auth0Lock_type|null>(null))
export type $auth0Lock_type = typeof Auth0Lock
export const b__logout_Auth0Lock = _b<type__logout_Auth0Lock>('__logout_Auth0Lock', ()=>
	writable(null) as type__logout_Auth0Lock
)
export const __auth0Lock = b__auth0Lock()
export type $type__logout_Auth0Lock = ()=>Promise<void>
export type $maybe_type__logout_Auth0Lock = $type__logout_Auth0Lock|null
export type type__logout_Auth0Lock = Writable<$maybe_type__logout_Auth0Lock>
export const __logout_Auth0Lock = b__logout_Auth0Lock()
export const b__AUTH0_CLIENT_ID = _b('__AUTH0_CLIENT_ID', ()=>
	writable('') as AUTH0_CLIENT_ID_type)
export const __AUTH0_CLIENT_ID = b__AUTH0_CLIENT_ID()
export type $AUTH0_CLIENT_ID_type = string
export type AUTH0_CLIENT_ID_type = Writable<$AUTH0_CLIENT_ID_type>
export const b__AUTH0_DOMAIN = _b('__AUTH0_DOMAIN', ()=>
	writable('') as AUTH0_DOMAIN_type)
export const __AUTH0_DOMAIN = b__AUTH0_DOMAIN()
export type $AUTH0_DOMAIN_type = string
export type AUTH0_DOMAIN_type = Writable<$AUTH0_DOMAIN_type>
