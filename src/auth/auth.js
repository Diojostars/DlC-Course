import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './auth-config.json';

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        redirectUri={config.redirectUri}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);
