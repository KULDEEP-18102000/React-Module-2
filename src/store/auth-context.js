import React, { useContext,useState } from "react";

const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logOut:()=>{}
})

export const AuthContextProvider=(props)=>{

    const initialToken=localStorage.getItem('token')
    const [token,setToken]=useState(initialToken)

    const isLoggedIn=!!token

    const loginHandler=(token)=>{
        // console.log("loginhandler")
        setTimeout(()=>{
            console.log("settomeoutcalled")
            localStorage.clear('token')
        },300000)
        localStorage.setItem('token',token)
        setToken(token)
    }
    
    const logOutHandler=()=>{
        localStorage.clear('token')
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