import { _package_version } from '@ctx-core/package'
export function _AUTH0_LOCK_URL() {
	return `https://cdn.auth0.com/js/lock/${_package_version('auth0-lock')}/lock.min.js`
}
