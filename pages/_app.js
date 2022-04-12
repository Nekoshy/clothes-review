import '../styles/globals.css'
import {useState, useEffect, createContext} from "react";
import {checkToken} from "../util/checkToken";
import {UserContext} from "../context/usercontext";
import {checkU} from "../util/checkU";
import getToken from "./api/auth/getToken";
import {LoginContext} from "../context/logincontext";


function MyApp({ Component, pageProps }) {
    const [logged, setLogged] = useState();
    const [username, setUsername] = useState();
    useEffect( async () => {
        if (await checkToken()) {
            setLogged(true);
        }
    },[])
    useEffect( async () => {
         if (await checkToken()) {
             setUsername(checkU());
         }
     },[])
    return (
        <LoginContext.Provider value={{ logged:[logged, setLogged], username:[username, setUsername]}}>
            <Component {...pageProps} />
        </LoginContext.Provider>)
}

export default MyApp