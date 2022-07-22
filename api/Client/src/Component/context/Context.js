import { createContext, useEffect, useReducer } from "react";  
import Reducer from "./Reducer";

// user :null here because no user until login.
const INITIAL_STATE = {

    // User is set to either "null" when empty or the user data sent to local storage 
    // so user details can always be avaliable before login
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false,
}


export const Context = createContext(INITIAL_STATE);


export const ContextProvider = ({ children }) => {    
        const [state, dispatch ] = useReducer(Reducer, INITIAL_STATE);


        // this UseEffect fn is started when there is change to our user
    useEffect(() => {
        localStorage.setItem("user",  JSON.stringify( state.user ))
       
    })

        return (
            <Context.Provider   
                      value= {{
                         user:state.user,
                        isFetching: state.isFetching,
                        error: state.error,
                        dispatch, 
            }} 
         >  
            {children}
        </Context.Provider>

        );
};