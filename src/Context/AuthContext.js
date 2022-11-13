import { createContext } from 'react';

const AuthContext = createContext({
    adminIsLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export default AuthContext;