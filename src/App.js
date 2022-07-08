import React from "react";
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedRoute, RedirectRoute } from "./helpers/routes";
import { AuthContextProvider } from "./hooks";

export default function App() {

  return (
    
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME}  element={ 
              <RedirectRoute  redirectPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                <Home /> 
              </RedirectRoute>
          } />

          <Route exact path={ROUTES.SIGN_IN} element={ 
            <RedirectRoute redirectPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
              <SignIn />
            </RedirectRoute> 
          } />

          <Route exact path={ROUTES.SIGN_UP} element={ 
            <RedirectRoute redirectPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
              <SignUp />
            </RedirectRoute> 
          } />

          <Route exact path={ROUTES.BROWSE} element={
            <ProtectedRoute path={ROUTES.BROWSE} redirectPath={ROUTES.SIGN_IN}>
              <Browse />
            </ProtectedRoute>
          } />

        </Routes>
      </Router>

    </AuthContextProvider>
    
    
  );
}


