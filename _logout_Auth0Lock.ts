import { logout_Auth0Lock } from './logout_Auth0Lock'
export function _logout_Auth0Lock() {
	return function () {
		return logout_Auth0Lock(...arguments)
	}
}
