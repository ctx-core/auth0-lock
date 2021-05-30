import { package_version_ } from '@ctx-core/package'
export function _AUTH0_LOCK_URL() {
	return `https://cdn.auth0.com/js/lock/${package_version_('auth0-lock')}/lock.min.js`
}
