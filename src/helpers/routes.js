import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../hooks/use-auth-listener";

export function RedirectRoute({ children, redirectPath, ...rest}) {

    const { user } = UserAuth();
    
    return (
        <>
            {user ? <Navigate to = {{ pathname: redirectPath }} /> : children }  
        </>
    )
}

export function ProtectedRoute({ children, redirectPath, ...rest}) {
    
    const { user } = UserAuth();
    
    return (
        <>
            {user ? children : <Navigate to = {{ pathname: redirectPath }} />}
        </>
    );
}