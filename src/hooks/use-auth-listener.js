import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../lib/firebaseProd";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export default function AuthContextProvider({ children }) {
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const [user, setUser] = useState({});

    // useEffect(() => {
    //     const listener = onAuthStateChanged(auth, (authUser) => {
    //         if (authUser) {
    //             localStorage.setItem('authUser', JSON.stringify(authUser));
    //             setUser(authUser);
    //         }else {
    //             localStorage.removeItem('authUser');
    //             setUser(null);
    //         }
    //     });
    //     return () => {
    //         listener();
    //     }
    // }, []);

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            console.log(user)
        })
        return () => {
            listener();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )

};

export const UserAuth = () => {
    return useContext(UserContext)
};