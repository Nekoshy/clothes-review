import Navbar from '../components/navbar'
import {useContext, useEffect} from "react";
import {checkToken} from "../util/checkToken";
import {LoginContext} from "../context/logincontext";

const Home = () => {
    const {setLogged} = useContext(LoginContext);
    // useEffect( async () => {
    //     if (await checkToken()) {
    //         setLogged(true);
    //         window.location.replace('/register')
    //     }
    // },[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1>Test</h1>
            </div>
        </div>
    );
}
export default Home;