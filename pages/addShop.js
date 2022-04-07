import Navbar from '../components/navbar'
import styles from '../styles/AddShop.module.css';

function setWoman(e) {
    document.getElementById('sizes').innerHTML = '<h4>Tabela dla kobiet</h4>' +
        '<table>\n' +
        '   <tr>\n' +
        '      <td>Rozmiar</td> <td>XXS</td> <td>XS</td> <td>S</td> <td>M</td> <td>L</td> <td>XL</td> <td>XXL</td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Wzrost</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód klatki piersiowej</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód talii</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód pasa</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód bioder</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Długość rękawa</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '</table>'
    document.getElementById('woman').className = 'orangeButton'
    document.getElementById('man').className = 'whiteButton'
    document.getElementById('both').className = 'whiteButton'
}

function setMan(e) {
    document.getElementById('sizes').innerHTML = '<h4>Tabela dla mężczyzn</h4>' +
        '<table>\n' +
        '   <tr>\n' +
        '      <td>Rozmiar</td> <td>XXS</td> <td>XS</td> <td>S</td> <td>M</td> <td>L</td> <td>XL</td> <td>XXL</td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Wzrost</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód klatki piersiowej</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód talii</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód pasa</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód bioder</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Długość rękawa</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '</table>'
    document.getElementById('woman').className = 'whiteButton'
    document.getElementById('man').className = 'orangeButton'
    document.getElementById('both').className = 'whiteButton'
}

function setBoth(e) {
    document.getElementById('sizes').innerHTML = '<h4>Tabela dla kobiet</h4>' +
        '<table>\n' +
        '   <tr>\n' +
        '      <td>Rozmiar</td> <td>XXS</td> <td>XS</td> <td>S</td> <td>M</td> <td>L</td> <td>XL</td> <td>XXL</td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Wzrost</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód klatki piersiowej</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód talii</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód pasa</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód bioder</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Długość rękawa</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '</table>' +
        '<h4>Tabela dla mężczyzn</h4>' +
        '<table>\n' +
        '   <tr>\n' +
        '      <td>Rozmiar</td> <td>XXS</td> <td>XS</td> <td>S</td> <td>M</td> <td>L</td> <td>XL</td> <td>XXL</td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Wzrost</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód klatki piersiowej</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód talii</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód pasa</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Obwód bioder</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '   </tr>\n' +
        '   <tr>\n' +
        '      <td>Długość rękawa</td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td> <td><input class=invInput100w /></td>\n' +
        '   </tr>\n' +
        '</table>'
    document.getElementById('woman').className = 'whiteButton'
    document.getElementById('man').className = 'whiteButton'
    document.getElementById('both').className = 'orangeButton'
}

const AddShop = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className='row text-center'>
                    <h1>
                        Nowy sklep
                    </h1>
                </div>
                <div className='orangeBorder align-items-start'>
                    <div className={styles.leftSide}>
                        <div className='row'>
                            <h4>Sklep oferuje ubrania dla:</h4>
                            <button className='whiteButton' style={{width:'200px', margin:'0 15px 0 0'}} type={"button"} onClick={setBoth} id='both'>Kobiet i mężczyzn</button>
                            <button className='whiteButton' style={{width:'200px', margin:'0 15px 0 0'}} type={"button"} onClick={setWoman} id='woman'>Tylko kobiet</button>
                            <button className='whiteButton' style={{width:'200px'}} type={"button"} onClick={setMan} id='man'>Tylko mężczyzn</button>
                        </div>
                        <div className='row' id='sizes'>

                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className='row'>
                            <p>Logo sklepu</p>
                            <div className='orangeBorder flex-wrap text-center justify-center' style={{width:'200px', height:'200px', float:'right'}}>
                                <div className='row' style={{width:'150px', height:'150px'}}>
                                    <p>AAAA</p>
                                </div>
                                <div className='row'>
                                    <button className='orangeButton' style={{width:'150px'}}>Dodaj zdjęcie</button>
                                </div>
                            </div>
                        </div>
                        <div className='row' style={{float:'right', margin:'20px 0 0 0'}}>
                            <label htmlFor='shopname' style={{width:'auto'}}>Nazwa sklepu</label>
                            <input name='shopname' id='shopname' placeholder='Podaj nazwę sklepu' style={{width:'200px'}}/>
                        </div>
                        <div className='row' style={{float:'right'}}>
                            <label htmlFor='link' style={{width:'auto'}}>Link do strony internetowej</label>
                            <input name='link' id='link' placeholder='Podaj adres do strony internetowej' style={{width:'200px'}}/>
                        </div>
                        <div className='row' style={{float:'right'}}>
                            <button className='orangeButton' style={{width:'200px'}}>Dodaj sklep</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddShop