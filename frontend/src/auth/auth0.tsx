import { Auth0Provider, AppState, User, useAuth0 } from "@auth0/auth0-react";
import { DOMAIN, CLIENT_ID, REDIRECT_URI } from "../credentials";
import React from "react";
import { useNavigate } from "react-router-dom";

export const MyAuth = ({children} : {children? : React.ReactNode}) => {
    const navigate = useNavigate()
    return <Auth0Provider 
        domain = {DOMAIN}
        clientId={CLIENT_ID}
        authorizationParams={
        {
            redirect_uri : REDIRECT_URI
        }}
        onRedirectCallback = {
            (appstate: AppState|undefined, user: User|undefined) => {
                if(user){
                    navigate("/auth-callback")
                }
            }
        }
    >
        {children}
    </Auth0Provider>
}