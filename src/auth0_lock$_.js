import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const key = 'auth0_lock$'
/** @type {import('./auth0_lock$_.d.ts').auth0_lock$_} */
export const auth0_lock$_ = be_(key, ()=>atom$(undefined))
