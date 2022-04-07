import Navbar from '../components/navbar'
import styles from '../styles/AddShop.module.css'

const Shop = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className='row' style={{display:'flex'}}>
                    <div className={styles.leftSide}>
                        <div style={{display:'flex'}}>
                            <div className={styles.leftSide} style={{padding:'0'}}>
                                <div className='orangeBorder' style={{width:'300px', height:'300px'}}>

                                </div>
                            </div>
                            <div className={styles.rightSideIn}>
                                <div className='row'>
                                    <h1 className='mbs-0'>Nazwa sklepu</h1>
                                </div>
                                <div className='row'>
                                    <a>Link do strony</a>
                                </div>
                                <div className='row'>
                                    <p>Weryfikacja</p>
                                </div>
                                <hr/>
                                <div className='row'>
                                    <p>Oceń poprawność podanych informacji</p>
                                </div>
                                <div className='row'>
                                    <div style={{display:'inline-block', margin:'0 20px 0 0'}}>
                                        <img src='like.png' width='50px'/>
                                    </div>
                                    <div style={{display:'inline-block'}}>
                                        <img src='dislike-2.png' width='50px'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className='row'>
                            <h4 className='mbs-0'>Tabela dla kobiet</h4>
                            <table>
                                <tr>
                                    <td>Rozmiar</td> <td>XXS</td> <td>XS</td> <td>S</td> <td>M</td> <td>L</td> <td>XL</td> <td>XXL</td>
                                </tr>
                                <tr>
                                    <td>Wzrost</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Obwód klatki piersiowej</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Obwód talii</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Obwód pasa</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Obwód bioder</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Długość rękawa</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                            </table>
                            <h4>Tabela dla mężczyzn</h4>
                            <table>
                                <tr>
                                    <td>Rozmiar</td> <td>XXS</td> <td>XS</td> <td>S</td> <td>M</td> <td>L</td> <td>XL</td> <td>XXL</td>
                                 </tr>
                                <tr>
                                    <td>Wzrost</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Obwód klatki piersiowej</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Obwód talii</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Obwód pasa</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Obwód bioder</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                                <tr>
                                    <td>Długość rękawa</td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td> <td><input className='invInput100w'/></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;