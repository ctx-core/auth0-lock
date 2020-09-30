import { get } from '@ctx-core/store'
import { __auth0Lock, __logout_Auth0Lock } from './store'
import { _Auth0Lock } from './_Auth0Lock'
import { _logout_Auth0Lock } from './_logout_Auth0Lock'
export async function ensure_auth0Lock(options) {
	if (get(__auth0Lock)) return
	__auth0Lock.set(_Auth0Lock(options))
	__logout_Auth0Lock.set(_logout_Auth0Lock())
}
