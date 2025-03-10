import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("http://localhost:5000/api/profile", {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => setUser(response.data))
                .catch(() => localStorage.removeItem("token"));
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        axios.get("http://localhost:5000/api/profile", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => setUser(response.data))
            .catch(() => localStorage.removeItem("token"));
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
