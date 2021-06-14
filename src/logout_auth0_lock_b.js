import { be_, assign } from '@ctx-core/object';
import { get } from '@ctx-core/store';
import { throw_missing_argument } from '@ctx-core/error';
import { AUTH0_CLIENT_ID$_b, auth0_token$_b } from '@ctx-core/auth0';
import { auth0_lock$_b } from './auth0_lock$_b';
const key = 'logout_auth0_lock';
export const logout_auth0_lock_b = be_(key, ctx => {
    const auth0_token$ = auth0_token$_b(ctx);
    const auth0_lock$ = auth0_lock$_b(ctx);
    const AUTH0_CLIENT_ID$ = AUTH0_CLIENT_ID$_b(ctx);
    return logout_auth0_lock;
    async function logout_auth0_lock(in_opts) {
        const auth0_lock = auth0_lock$._;
        if (auth0_lock) {
            const opts = assign({ client_id: get(AUTH0_CLIENT_ID$) }, in_opts);
            if (!opts.returnTo)
                throw_missing_argument({ key: 'opts.returnTo' });
            auth0_token$.clear_auth0_token();
            auth0_lock.logout(opts);
        }
    }
});
//# sourceMappingURL=src/logout_auth0_lock_b.js.map