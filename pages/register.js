import Navbar from '../components/navbar'
import styles from '../styles/Register.module.css'

function setWoman(e) {
    document.getElementById('gender').value = 'K'
    if (document.getElementById('menpic').className==='d-block') {
        document.getElementById('menpic').className='d-none'
        document.getElementById('mbutton').className='whiteButton'
    }
    document.getElementById('wompic').className='d-block'
    document.getElementById('wbutton').className='orangeButton'
}

function setMen(e) {
    document.getElementById('gender').value = 'M'
    if (document.getElementById('wompic').className==='d-block') {
        document.getElementById('wompic').className='d-none'
        document.getElementById('wbutton').className='whiteButton'
    }
    document.getElementById('menpic').className='d-block'
    document.getElementById('mbutton').className='orangeButton'
}

const Register = () => {
    return(
        <div>
            <Navbar/>
            <div className="container">
                <form action='/api/auth/register' method='post'>
                    <div className={styles.leftSide}>
                        <div className="m-auto">
                            <h2 className="mbs-0">Dane do logowania</h2>
                            <label htmlFor="username">Nazwa użytkownika</label>
                            <input className={styles.input} placeholder="Podaj nazwę użytkownika" name="username" id="username"/>
                            <label htmlFor="email">E-mail</label>
                            <input className={styles.input} placeholder="Podaj adres e-mail" name="email" id="email"/>
                            <label htmlFor="password">Hasło</label>
                            <input className={styles.input} type='password' placeholder="Podaj hasło" name="password" id="password"/>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className="f-left w-65">
                            <h2 className="mbs-0">Płeć i wymiary ciała</h2>
                            <p className="mbe-5">Płeć</p>
                            <input name="gender" id="gender"/>
                            <div className="f-left w-45">
                                <button className='whiteButton' type="button" onClick={setWoman} id="wbutton">Kobieta</button>
                                <label htmlFor="height">Wzrost</label>
                                <input className={styles.input} placeholder="Podaj swój wzrost" name="height" id="height"/>
                                <label htmlFor="height">Obwód klatki piersiowej (1)</label>
                                <input className={styles.input} placeholder="Podaj obwód klatki piersiowej" name="chest" id="chest"/>
                                <label htmlFor="height">Obwód talii (2)</label>
                                <input className={styles.input} placeholder="Podaj obwód talii" name="waist" id="waist"/>
                            </div>
                            <div className="f-right w-45">
                                <button className='whiteButton' type="button" onClick={setMen} id="mbutton">Mężczyzna</button>
                                <label htmlFor="height">Obwód pasa (3)</label>
                                <input className={styles.input} placeholder="Podaj obwód pasa" name="waist-below" id="waist-below"/>
                                <label htmlFor="height">Obwód bioder (4)</label>
                                <input className={styles.input} placeholder="Podaj obwód bioder" name="hips" id="hips"/>
                                <label htmlFor="height">Długość rękawa (5)</label>
                                <input className={styles.input} placeholder="Podaj długość rękawa" name="sleeve" id="sleeve"/>
                            </div>
                        </div>
                        <div className="f-right">
                            <img id="wompic" src="womdim.png" height="400px" className="d-none" alt='woman'/>
                            <img id="menpic" src="mendim.png" height="400px" className="d-none" alt='man'/>
                        </div>
                    </div>
                    <div className="w-25 p-30">
                        <button type={"submit"} className="orangeButton mt-25">Zarejestruj się</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;