import Navbar from '../components/navbar'
import styles from "../styles/Register.module.css";

function setWoman(e) {
    document.getElementById('gender').value = 'K'
    if (document.getElementById('menpic').className='d-block') {
        document.getElementById('menpic').className='d-none'
        document.getElementById('mbutton').className='whiteButton'
    }
    document.getElementById('wompic').className='d-block'
    document.getElementById('wbutton').className='orangeButton'
}

function setMen(e) {
    document.getElementById('gender').value = 'M'
    if (document.getElementById('wompic').className='d-block') {
        document.getElementById('wompic').className='d-none'
        document.getElementById('wbutton').className='whiteButton'
    }
    document.getElementById('menpic').className='d-block'
    document.getElementById('mbutton').className='orangeButton'
}

const EditProfile = () => {
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='orangeBorder w-65' style={{margin:'auto'}}>
                    <div className='container'>
                        <div className="f-left w-65">
                            <h2>Płeć i wymiary ciała</h2>
                            <p className="mbe-5">Płeć</p>
                            <input name="gender" id="gender" hidden/>
                            <div className="f-left w-45">
                                <button className='whiteButton' type="button" onClick={setWoman} id="wbutton">Kobieta</button>
                                <label htmlFor="height">Wzrost</label>
                                <input className={styles.input} placeholder="Podaj swój wzrost" name="height" id="height"/>
                                <label htmlFor="height">Obwód klatki piersiowej (1)</label>
                                <input className={styles.input} placeholder="Podaj obwód klatki piersiowej" name="height" id="height"/>
                                <label htmlFor="height">Obwód talii (2)</label>
                                <input className={styles.input} placeholder="Podaj obwód talii" name="height" id="height"/>
                            </div>
                            <div className="f-right w-45">
                                <button className='whiteButton' type="button" onClick={setMen} id="mbutton">Mężczyzna</button>
                                <label htmlFor="height">Obwód pasa (3)</label>
                                <input className={styles.input} placeholder="Podaj obwód pasa" name="height" id="height"/>
                                <label htmlFor="height">Obwód bioder (4)</label>
                                <input className={styles.input} placeholder="Podaj obwód bioder" name="height" id="height"/>
                                <label htmlFor="height">Długość rękawa (5)</label>
                                <input className={styles.input} placeholder="Podaj długość rękawa" name="height" id="height"/>
                            </div>
                        </div>
                        <div className="f-right">
                            <img id="wompic" src="womdim.png" height="400px" className="d-none"/>
                            <img id="menpic" src="mendim.png" height="400px" className="d-none"/>
                        </div>
                    </div>
                </div>
                <div className="p-30" style={{margin:'auto', width:'200px'}}>
                    <button className="orangeButton mt-25">Zapisz</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;