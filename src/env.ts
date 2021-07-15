import { throw_missing_env } from '@ctx-core/env'
import { AUTH0_LOCK_URL_ } from './package.js'
if (!process.env.AUTH0_CLIENT_ID) throw_missing_env('AUTH0_CLIENT_ID')
if (!process.env.AUTH0_DOMAIN) throw_missing_env('AUTH0_DOMAIN')
export const AUTH0_LOCK_URL =
	process.env.AUTH0_LOCK_URL
	|| AUTH0_LOCK_URL_()
