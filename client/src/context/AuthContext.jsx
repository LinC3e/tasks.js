import { createContext, useState, useContext , useEffect} from "react";
import { registerReq, loginReq } from "../api/auth";

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

    const signin = async (user) => { 
        try {
            const res = await loginReq(user);
            console.log(res)

        } catch (error) {
            if(Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }

    useEffect(() => {
        if(errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 10000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}