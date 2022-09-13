import { createContext, useState} from "react";
import React from 'react';

const authContext =createContext();
AuthProvider = authContext. Provider;

function AuthContextProvider({children}) {


    const[success, setSuccess]= useState("false");    
    const[error, setError]= useState("null");    
    const[loading, setloading]= useState("false");    
    const[user, setUser]= useState("null"); 
    
    // signup function
    const authRegister= async (username,email,password)=>{
      setloading(true);
      await fetch("/api/users/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setSuccess(true);
        setUser(data);
      })
      .catch((err)=>{
        console.log(err);
        setError(err);
      });
       setloading(false);
    };
  return (
    <div>

    </div>
  )
}
  
export default AuthContext