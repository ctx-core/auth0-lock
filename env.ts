import { throw_missing_env } from '@ctx-core/env'
import { _AUTH0_LOCK_URL } from './package'
if (!process.env.AUTH0_CLIENT_ID) throw_missing_env('AUTH0_CLIENT_ID')
if (!process.env.AUTH0_DOMAIN) throw_missing_env('AUTH0_DOMAIN')
export const AUTH0_LOCK_URL =
	process.env.AUTH0_LOCK_URL
	|| _AUTH0_LOCK_URL()
