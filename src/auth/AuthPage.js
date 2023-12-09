import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthPage = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <p>Hello, {user.name}!</p>
                    <button onClick={() => logout()}>Logout</button>
                </div>
            ) : (
                <button onClick={() => loginWithRedirect()}>Login</button>
            )}
        </div>
    );
};

export default AuthPage;