import React, { useContext,useState } from "react";

const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logOut:()=>{}
})

export const AuthContextProvider=(props)=>{

    const [token,setToken]=useState(null)

    const isLoggedIn=!!token

    const loginHandler=(token)=>{
        setToken(token)
    }
    
    const logOutHandler=()=>{
        setToken(null)
    }

    const contextValue={
        token:token,
        isLoggedIn:isLoggedIn,
        loginHandler:loginHandler,
        logOutHandler:logOutHandler
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
        
}

export default AuthContext