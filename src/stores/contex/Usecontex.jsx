

import { createContext, useContext, useState } from "react";

const context = createContext();

export const Cartprovider = ({ children }) => {
    const [cartitem, setcartitem] = useState([]);
    const [users, setUsers] = useState([]); // List of registered users
    const [currentUser, setCurrentUser] = useState(null); // Currently logged-in user

    // Cart management functions
    const AddtoCart = (item) => {
        setcartitem([...cartitem, item]);
    };

    const RemoveCart = (item) => {
        setcartitem(cartitem.filter((data) => data.id !== item.id));
    };

    // Authentication functions
    const login = (email, password) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setCurrentUser(user); // Set logged-in user
            return true;
        }
        return false;
    };

    const register = (email, password) => {
        const userExists = users.find(u => u.email === email);
        if (!userExists) {
            const newUser = { email, password };
            setUsers([...users, newUser]);
            return true;
        }
        return false;
    };

    const logout = () => {
        setCurrentUser(null); // Clear current user when logged out
    };

    return (
        <context.Provider value={{
            cartitem, AddtoCart, RemoveCart,
            users, currentUser, login, register, logout
        }}>
            {children}
        </context.Provider>
    );
};

export const Usecart = () => {
    return useContext(context);
};

