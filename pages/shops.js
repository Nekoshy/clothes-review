import Navbar from '../components/navbar'
import styles from '../styles/Shops.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

const Shops = () => {
    const router = useRouter();
    const [shops, setShops] = useState();
    useEffect( () => {
        axios.get('/api/shop/getShops').then(res => {
            setShops(res.data.shops)
        })
    }, [])
    console.log(shops)
    const [shopID, setShopID] = useState('');
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <h1>
                        Lista sklepów
                    </h1>
                </div>
                <div className='row'>
                    <div className='d-inline-block'>
                        <div className="d-flex">
                            <div className="orangeBorder">
                                <p style={{margin:'0 0 0 10px'}}>
                                    Brakuje jakiegoś sklepu? Pomóż nam uzupełnić bazę!
                                </p>
                                <a href='/addShop'>
                                    <button className="orangeButton ml-10" style={{width:'120px', height:'40px', margin:'10px 10px 10px 20px'}}>Dodaj!</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='d-inline-block f-right'>
                        <div className='orangeBorder' style={{width:'500px', height:'60px'}}>
                            <img src='find.png' width='35px' style={{padding:'0 0 0 10px'}}/>
                            <input className='invInput' placeholder='Jakiego sklepu szukasz?'/>
                            <button className='orangeButton' style={{width:'150px', margin:'auto 10px auto 10px'}}>Szukaj</button>
                        </div>
                    </div>
                </div>
                <hr className={styles.hrstyle}></hr>
                <div className='d-flex'>
                {shops?.map((element) => {
                        return (
                            <>
                                <div className='orangeBorder d-flex' style={{width:'300px', height:'300px', margin:'0 15px 15px 0'}}>
                                    <div className='text-center' style={{width:'200px', height:'200px', margin:'auto'}}><h2 className='text-middle'>{element.name}</h2></div>
                                    <div className='row d-flex justify-center'>
                                        <button className='orangeButton' style={{width:'200px'}} onClick={(e) => {
                                            setShopID(element._id)
                                            router.push({pathname:'/shop', search:`?id=${element._id}`})}}>Sprawdź</button>
                                    </div>
                                </div>
                            </>
                        )
                }
                    )}
                </div>
            </div>
        </div>
    );
}
export default Shops;