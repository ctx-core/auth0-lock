import { package_version_ } from '@ctx-core/package'
/**
 * @returns {Promise<string>}
 * @private
 */
export async function AUTH0_LOCK_URL_() {
	return `https://cdn.auth0.com/js/lock/${await package_version_('auth0-lock')}/lock.min.js`
}
export {
	AUTH0_LOCK_URL_ as _AUTH0_LOCK_URL
}
