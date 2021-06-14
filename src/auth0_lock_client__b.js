import Auth0Lock from 'auth0-lock';
import { be_ } from '@ctx-core/object';
import { AUTH0_CLIENT_ID$_b, AUTH0_DOMAIN$_b } from '@ctx-core/auth0';
const key = 'auth0_lock_client_';
export const auth0_lock_client__b = be_(key, ctx => {
    const AUTH0_CLIENT_ID = AUTH0_CLIENT_ID$_b(ctx);
    const AUTH0_DOMAIN = AUTH0_DOMAIN$_b(ctx);
    return auth0_lock_client_;
    function auth0_lock_client_(options) {
        return (new Auth0Lock(AUTH0_CLIENT_ID.$, AUTH0_DOMAIN.$, options));
    }
});
//# sourceMappingURL=src/auth0_lock_client__b.js.map