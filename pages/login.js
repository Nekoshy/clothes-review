import Navbar from '../components/navbar'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import axios from "axios";
import {useContext, useState} from "react";
import {UserContext} from "../context/usercontext";
import {LoginContext} from "../context/logincontext";
import {checkU} from "../util/checkU";

const Login = () => {
    const {logged,username} = useContext(LoginContext);
    const [password,setPassword] = useState("");
    const login = async (e) => {
        e.preventDefault();
        await axios.post("/api/auth/login",{username, password})
            .then(res => {
            // console.log(res.data);
            console.log(res.username);
                if (typeof window !== 'undefined') {
                    // console.log('You are on the browser')
                    localStorage.setItem("username", res.username)
                    // 👉️ can use localStorage here
                } else {
                    console.log('You are on the server')
                    // 👉️ can't use localStorage
                }
            })
            .then(function() {
                location.href="/";
            })
    }


    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className={styles.loginContainer}>
                    <div className={styles.border}>
                        <div className={styles.loginRegister}>
                            <div className={styles.login}>
                                Logowanie
                            </div>
                            <div className={styles.register}>
                                <span><p className='m-0'>Nie masz konta?</p><br/>
                                <Link href="/register"><a className='links'>Zarejestruj się!</a></Link></span>
                            </div>
                        </div>

                        <form onSubmit={login}>
                            <div className={styles.inputs}>
                                <div className='row d-flex justify-center'>
                                    <label htmlFor='username'>Nazwa użytkownika</label>
                                    <input value={username[0]} onChange={(e) => {
                                        username[1](e.target.value)
                                        console.log(username[0])
                                    }} />
                                </div>
                                <div className='row d-flex justify-center'>
                                    <label htmlFor='password'>Hasło</label>
                                    <input  type='password' value={password} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                </div>
                                <div className='row d-flex justify-center'>
                                    <button className={styles.button} type={"submit"}>Zaloguj się</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;