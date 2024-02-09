import React, { createContext, useState } from 'react';

 const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;







/*// userContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext
//export { UserProvider, UserContext }; // Exporta UserProvider y UserContext¨*/
