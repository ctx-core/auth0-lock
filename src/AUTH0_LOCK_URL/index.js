import { missing_env__throw } from '@ctx-core/env'
import { AUTH0_LOCK_URL_ } from '../AUTH0_LOCK_URL_/index.js'
if (!process.env.AUTH0_CLIENT_ID) missing_env__throw('AUTH0_CLIENT_ID')
if (!process.env.AUTH0_DOMAIN) missing_env__throw('AUTH0_DOMAIN')
/** @type {typeof import('./index.d.ts').AUTH0_LOCK_URL} */
export const AUTH0_LOCK_URL = process.env.AUTH0_LOCK_URL || AUTH0_LOCK_URL_()
