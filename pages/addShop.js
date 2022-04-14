import Navbar from '../components/navbar'
import styles from '../styles/AddShop.module.css';
import {useState} from "react";
import SizesMen from "../components/shop/sizesMen";
import SizesWomen from "../components/shop/sizesWomen";
import axios from "axios";

const AddShop = () => {
    const [sizeChart, setSizeChart] = useState('')
    const [sizeWoman, setSizeWoman] = useState({
        height: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        chest: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        waist: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        waist_below: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        hips: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        sleeve: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''}
    })
    const [sizeMan, setSizeMan] = useState({
        height: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        chest: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        waist: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        waist_below: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        hips: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''},
        sleeve: {xxs:'', xs:'', s:'', m:'' , l:'' , xl:'' , xxl:''}
    })
    const [shopName, setShopName] = useState('')
    const [shopLink, setShopLink] = useState('')
    const sendForm = (e) => {
        e.preventDefault()
        axios.post('/api/shop/addShop', {sizeWoman, sizeMan, shopName, shopLink}).then(res => {
            if (res.status === 200) {
                console.log('ok')
            }
            }
        )
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className='row text-center'>
                    <h1>
                        Nowy sklep
                    </h1>
                </div>
                <form onSubmit={sendForm}>
                    <div className='orangeBorder align-items-start'>
                        <div className={styles.leftSide}>
                            <div className='row'>
                                <h4>Sklep oferuje ubrania dla:</h4>
                                <button className={sizeChart === 'both' ? 'orangeButton' : 'whiteButton'} style={{width:'200px', margin:'0 15px 0 0'}} type={"button"} onClick={() => setSizeChart('both')} id='both'>Kobiet i mężczyzn</button>
                                <button className={sizeChart === 'woman' ? 'orangeButton' : 'whiteButton'} style={{width:'200px', margin:'0 15px 0 0'}} type={"button"} onClick={() => setSizeChart('woman')} id='woman'>Tylko kobiet</button>
                                <button className={sizeChart === 'man' ? 'orangeButton' : 'whiteButton'} style={{width:'200px'}} type={"button"} onClick={() => setSizeChart('man')} id='man'>Tylko mężczyzn</button>
                            </div>
                            <div className='row' id='sizes'>
                                {sizeChart === 'both' ? <><SizesMen sizeMan={sizeMan} setSizeMan={setSizeMan} /><SizesWomen sizeWoman={sizeWoman} setSizeWoman={setSizeWoman}/></> : sizeChart === 'woman' ? <SizesWomen sizeWoman={sizeWoman} setSizeWoman={setSizeWoman}/> : sizeChart === 'man' ? <SizesMen sizeMan={sizeMan} setSizeMan={setSizeMan}/> : null}
                            </div>
                        </div>
                        <div className={styles.rightSide}>
                            <div className='row' style={{float:'right', margin:'20px 0 0 0'}}>
                                <label htmlFor='shopname' style={{width:'auto'}}>Nazwa sklepu</label>
                                <input name='shopname' id='shopname' placeholder='Podaj nazwę sklepu' style={{width:'200px'}} value={shopName} onChange={(e) => {
                                    setShopName(e.target.value)
                                }}/>
                            </div>
                            <div className='row' style={{float:'right'}}>
                                <label htmlFor='link' style={{width:'auto'}}>Link do strony internetowej</label>
                                <input name='link' id='link' placeholder='Podaj adres do strony internetowej' style={{width:'200px'}} value={shopLink} onChange={(e) => {
                                    setShopLink(e.target.value)
                                }}/>
                            </div>
                            <div className='row' style={{float:'right'}}>
                                <button className='orangeButton' style={{width:'200px'}}>Dodaj sklep</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddShop