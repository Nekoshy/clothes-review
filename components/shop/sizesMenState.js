import {useState} from "react";

const SizesMenState = ({sizesInfoMen, finallSize}) => {
    const [sizeList] = useState(['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'])
    let heightarr = sizesInfoMen?.filter(element => element.dimensionName === 'height' && element.gender === 'M');
    let chestarr = sizesInfoMen?.filter(element => element.dimensionName === 'chest' && element.gender === 'M');
    let waistarr = sizesInfoMen?.filter(element => element.dimensionName === 'waist' && element.gender === 'M');
    let waistbelowarr = sizesInfoMen?.filter(element => element.dimensionName === 'waist_below' && element.gender === 'M');
    let hipsarr = sizesInfoMen?.filter(element => element.dimensionName === 'hips' && element.gender === 'M');
    let sleevearr = sizesInfoMen?.filter(element => element.dimensionName === 'sleeve' && element.gender === 'M');
    return (
        <>
            <h4>Tabela dla mężczyzn</h4>
            <table>
                <tr>
                    <td>Rozmiar</td>
                    <td>XXS</td>
                    <td>XS</td>
                    <td>S</td>
                    <td>M</td>
                    <td>L</td>
                    <td>XL</td>
                    <td>XXL</td>
                </tr>
                <tr>
                    <td>Wzrost</td>
                    {
                        [...Array(7)].map((el, ind) => {
                            if(!heightarr) {
                                return <td></td>
                            }
                            let index = heightarr?.map((x) => x.sizes).indexOf(sizeList[ind])
                            if (index !== -1) {
                                return <td>{heightarr[index]?.value}</td>
                            } else {
                                return <td></td>
                            }
                        })
                    }
                </tr>
                <tr>
                    <td>Obwód klatki piersiowej</td>
                    {
                        [...Array(7)].map((el, ind) => {
                            if(!chestarr) {
                                return <td></td>
                            }
                            let index = chestarr?.map((x) => x.sizes).indexOf(sizeList[ind])
                            if (index !== -1) {
                                return <td>{chestarr[index]?.value}</td>
                            } else {
                                return <td></td>
                            }
                        })
                    }
                </tr>
                <tr>
                    <td>Obwód talii</td>
                    {
                        [...Array(7)].map((el, ind) => {
                            if(!waistarr) {
                                return <td></td>
                            }
                            let index = waistarr?.map((x) => x.sizes).indexOf(sizeList[ind])
                            if (index !== -1) {
                                return <td>{waistarr[index]?.value}</td>
                            } else {
                                return <td></td>
                            }
                        })
                    }
                </tr>
                <tr>
                    <td>Obwód pasa</td>
                    {
                        [...Array(7)].map((el, ind) => {
                            if(!waistbelowarr) {
                                return <td></td>
                            }
                            let index = waistbelowarr?.map((x) => x.sizes).indexOf(sizeList[ind])
                            if (index !== -1) {
                                return <td>{waistbelowarr[index]?.value}</td>
                            } else {
                                return <td></td>
                            }
                        })
                    }
                </tr>
                <tr>
                    <td>Obwód bioder</td>
                    {
                        [...Array(7)].map((el, ind) => {
                            if(!hipsarr) {
                                return <td></td>
                            }
                            let index = hipsarr?.map((x) => x.sizes).indexOf(sizeList[ind])
                            if (index !== -1) {
                                return <td>{hipsarr[index]?.value}</td>
                            } else {
                                return <td></td>
                            }
                        })
                    }
                </tr>
                <tr>
                    <td>Długość rękawa</td>
                    {
                        [...Array(7)].map((el, ind) => {
                            if(!sleevearr) {
                                return <td></td>
                            }
                            let index = sleevearr?.map((x) => x.sizes).indexOf(sizeList[ind])
                            if (index !== -1) {
                                return <td>{sleevearr[index]?.value}</td>
                            } else {
                                return <td></td>
                            }
                        })
                    }
                </tr>
            </table>
            {finallSize?.m && (<h2>Twój rozmiar to: {finallSize.m}</h2>)}
        </>
    )
}

export default SizesMenState