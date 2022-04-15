import Navbar from '../components/navbar'
import styles from '../styles/AddShop.module.css'
import {router} from "next/client";
import { useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import SizesMenState from "../components/shop/sizesMenState";
import SizesWomenState from "../components/shop/sizesWomanState";

const Shop = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    const [shopInfo, setShopInfo] = useState();
    const [dimensionInfo, setDimensionInfo] = useState();
    const [sizeGender, setSizeGender] = useState();
    const [finallSize, setFinallSize] = useState();
    console.log(dimensionInfo)
    let woman = false;
    let man = false;
    let test2;
    useEffect(() => {
         axios.get(`/api/shop/getShop${window.location.search}`).then(res => {
            setShopInfo(res.data.shop);
            let test = res.data.dimen
            test2 = test.map((element,index,arr) => {
                if (Object.values(element.sizeId).includes('K')) {
                    woman = true;
                }
                if (Object.values(element.sizeId).includes('M')) {
                    man = true;
                }
                if (arr.length-1 === index) {
                    setSizeGender(woman && man ? 'both' : woman ? 'woman' : man ? 'man' : null)
                }
                return {
                    value:element.value,
                    gender:element.sizeId.gender,
                    sizes:element.sizeId.sizes,
                    dimensionName:element.dimensionName,
                }
            });
            setDimensionInfo(test2)

             axios.get(`/api/info/userSizes${window.location.search}`).then((res) => {
                 setFinallSize(res.data);
             })

        })
        }, []
    )
    // if (woman === true) {
    //     sizesInfoWomen = getSizesWoman(test2)
    // }
    // console.log(shopInfo)
    // console.log(sizesInfoWomen)
    // console.log(dimensionInfo);

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className='row' style={{display:'flex'}}>
                    <div className={styles.leftSide}>
                        <div style={{display:'flex'}}>
                            <div className={styles.rightSideIn}>
                                <div className='row'>
                                    <h1 className='mbs-0'>{shopInfo?.name}</h1>
                                </div>
                                <div className='row'>
                                    <a>Link do strony: {shopInfo?.link}</a>
                                </div>
                                {/*<div className='row'>*/}
                                {/*    <p>Weryfikacja</p>*/}
                                {/*</div>*/}
                                {/*<hr/>*/}
                                {/*<div className='row'>*/}
                                {/*    <p>Oceń poprawność podanych informacji</p>*/}
                                {/*</div>*/}
                                {/*<div className='row'>*/}
                                {/*    <div style={{display:'inline-block', margin:'0 20px 0 0'}}>*/}
                                {/*        <img src='like.png' width='50px'/>*/}
                                {/*    </div>*/}
                                {/*    <div style={{display:'inline-block'}}>*/}
                                {/*        <img src='dislike-2.png' width='50px'/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className='row'>
                            {sizeGender === 'both' ? <><SizesMenState sizesInfoMen={dimensionInfo} finallSize={finallSize}/><SizesWomenState sizesInfoWomen={dimensionInfo} finallSize={finallSize}/></> : sizeGender === 'woman' ? <SizesWomenState sizesInfoWomen={dimensionInfo} finallSize={finallSize}/> : sizeGender === 'man' ? <SizesMenState sizesInfoMen={dimensionInfo} finallSize={finallSize}/> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;