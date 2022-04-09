import Navbar from '../components/navbar'
import styles from '../styles/Login.module.css'
import Link from 'next/link'

const Login = () => {
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
                        <form action='api/auth/login' method='post'>
                            <div className={styles.inputs}>
                                <div className='row d-flex justify-center'>
                                    <label htmlFor='username'>Nazwa użytkownika</label>
                                    <input name='username' id='username'/>
                                </div>
                                <div className='row d-flex justify-center'>
                                    <label htmlFor='password'>Hasło</label>
                                    <input name='password' id='password' type='password'/>
                                </div>
                                <div className='row d-flex justify-center'>
                                    <button className={styles.button} type={"submit"}>
                                        Zaloguj się
                                    </button>
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