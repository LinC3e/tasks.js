import { createContext, useState, useContext } from "react";
import { registerReq } from "../api/auth";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an authProvider');
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerReq(user);
            if (res.status === 200) {
                setUser(res.data);
                setisAuthenticated(true);
            }
        } catch (error) {
            console.log(error.response.data);
            setErrors(error.response.data.message);
        }
    };
    return (
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}