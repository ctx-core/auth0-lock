import { import_meta_env_, missing_env__throw } from 'ctx-core/env'
import { AUTH0_LOCK_URL_ } from '../AUTH0_LOCK_URL_/index.js'
if (!import_meta_env_().AUTH0_CLIENT_ID) missing_env__throw('AUTH0_CLIENT_ID')
if (!import_meta_env_().AUTH0_DOMAIN) missing_env__throw('AUTH0_DOMAIN')
/** @type {typeof import('./index.d.ts').AUTH0_LOCK_URL} */
export const AUTH0_LOCK_URL =
	import_meta_env_().AUTH0_LOCK_URL
	|| AUTH0_LOCK_URL_()
