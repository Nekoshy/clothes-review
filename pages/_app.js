import '../styles/globals.css'
import {LoginContext} from "../context/logincontext";
import {useState, useEffect} from "react";
import {checkToken} from "../util/checkToken";

function MyApp({ Component, pageProps }) {
    const [logged, setLogged] = useState();
    useEffect( async () => {
        if (await checkToken()) {
            setLogged(true);
        }
    },[])
    return (<LoginContext.Provider value={{logged, setLogged}}>
        <Component {...pageProps} />
    </LoginContext.Provider>)
}

export default MyApp