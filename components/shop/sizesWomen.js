const SizesWomen = ({sizeWoman, setSizeWoman}) => {
    return (
        <>
            <h4>Tabela dla Kobiet</h4>
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
                    <td><input className='invInput100w' value={sizeWoman.height.xxs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, height:{...sizeWoman.height, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.height.xs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, height:{...sizeWoman.height, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.height.s} onChange={(e) => {
                        setSizeWoman({...sizeWoman, height:{...sizeWoman.height, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.height.m} onChange={(e) => {
                        setSizeWoman({...sizeWoman, height:{...sizeWoman.height, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.height.l} onChange={(e) => {
                        setSizeWoman({...sizeWoman, height:{...sizeWoman.height, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.height.xl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, height:{...sizeWoman.height, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.height.xxl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, height:{...sizeWoman.height, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Obwód klatki piersiowej</td>
                    <td><input className='invInput100w' value={sizeWoman.chest.xxs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, chest:{...sizeWoman.chest, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.chest.xs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, chest:{...sizeWoman.chest, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.chest.s} onChange={(e) => {
                        setSizeWoman({...sizeWoman, chest:{...sizeWoman.chest, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.chest.m} onChange={(e) => {
                        setSizeWoman({...sizeWoman, chest:{...sizeWoman.chest, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.chest.l} onChange={(e) => {
                        setSizeWoman({...sizeWoman, chest:{...sizeWoman.chest, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.chest.xl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, chest:{...sizeWoman.chest, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.chest.xxl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, chest:{...sizeWoman.chest, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Obwód talii</td>
                    <td><input className='invInput100w' value={sizeWoman.waist.xxs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist:{...sizeWoman.waist, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist.xs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist:{...sizeWoman.waist, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist.s} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist:{...sizeWoman.waist, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist.m} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist:{...sizeWoman.waist, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist.l} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist:{...sizeWoman.waist, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist.xl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist:{...sizeWoman.waist, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist.xxl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist:{...sizeWoman.waist, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Obwód pasa</td>
                    <td><input className='invInput100w' value={sizeWoman.waist_below.xxs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist_below:{...sizeWoman.waist_below, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist_below.xs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist_below:{...sizeWoman.waist_below, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist_below.s} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist_below:{...sizeWoman.waist_below, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist_below.m} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist_below:{...sizeWoman.waist_below, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist_below.l} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist_below:{...sizeWoman.waist_below, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist_below.xl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist_below:{...sizeWoman.waist_below, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.waist_below.xxl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, waist_below:{...sizeWoman.waist_below, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Obwód bioder</td>
                    <td><input className='invInput100w' value={sizeWoman.hips.xxs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, hips:{...sizeWoman.hips, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.hips.xs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, hips:{...sizeWoman.hips, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.hips.s} onChange={(e) => {
                        setSizeWoman({...sizeWoman, hips:{...sizeWoman.hips, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.hips.m} onChange={(e) => {
                        setSizeWoman({...sizeWoman, hips:{...sizeWoman.hips, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.hips.l} onChange={(e) => {
                        setSizeWoman({...sizeWoman, hips:{...sizeWoman.hips, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.hips.xl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, hips:{...sizeWoman.hips, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.hips.xxl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, hips:{...sizeWoman.hips, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Długość rękawa</td>
                    <td><input className='invInput100w' value={sizeWoman.sleeve.xxs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, sleeve:{...sizeWoman.sleeve, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.sleeve.xs} onChange={(e) => {
                        setSizeWoman({...sizeWoman, sleeve:{...sizeWoman.sleeve, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.sleeve.s} onChange={(e) => {
                        setSizeWoman({...sizeWoman, sleeve:{...sizeWoman.sleeve, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.sleeve.m} onChange={(e) => {
                        setSizeWoman({...sizeWoman, sleeve:{...sizeWoman.sleeve, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.sleeve.l} onChange={(e) => {
                        setSizeWoman({...sizeWoman, sleeve:{...sizeWoman.sleeve, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.sleeve.xl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, sleeve:{...sizeWoman.sleeve, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeWoman.sleeve.xxl} onChange={(e) => {
                        setSizeWoman({...sizeWoman, sleeve:{...sizeWoman.sleeve, xxl:e.target.value}})
                    }}/></td>
                </tr>
            </table>
        </>
    )
}

export default SizesWomen