const SizesMen = ({sizeMan, setSizeMan}) => {
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
                    <td><input className='invInput100w' value={sizeMan.height.xxs} onChange={(e) => {
                        setSizeMan({...sizeMan, height:{...sizeMan.height, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.height.xs} onChange={(e) => {
                        setSizeMan({...sizeMan, height:{...sizeMan.height, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.height.s} onChange={(e) => {
                        setSizeMan({...sizeMan, height:{...sizeMan.height, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.height.m} onChange={(e) => {
                        setSizeMan({...sizeMan, height:{...sizeMan.height, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.height.l} onChange={(e) => {
                        setSizeMan({...sizeMan, height:{...sizeMan.height, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.height.xl} onChange={(e) => {
                        setSizeMan({...sizeMan, height:{...sizeMan.height, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.height.xxl} onChange={(e) => {
                        setSizeMan({...sizeMan, height:{...sizeMan.height, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Obwód klatki piersiowej</td>
                    <td><input className='invInput100w' value={sizeMan.chest.xxs} onChange={(e) => {
                        setSizeMan({...sizeMan, chest:{...sizeMan.chest, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.chest.xs} onChange={(e) => {
                        setSizeMan({...sizeMan, chest:{...sizeMan.chest, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.chest.s} onChange={(e) => {
                        setSizeMan({...sizeMan, chest:{...sizeMan.chest, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.chest.m} onChange={(e) => {
                        setSizeMan({...sizeMan, chest:{...sizeMan.chest, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.chest.l} onChange={(e) => {
                        setSizeMan({...sizeMan, chest:{...sizeMan.chest, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.chest.xl} onChange={(e) => {
                        setSizeMan({...sizeMan, chest:{...sizeMan.chest, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.chest.xxl} onChange={(e) => {
                        setSizeMan({...sizeMan, chest:{...sizeMan.chest, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Obwód talii</td>
                    <td><input className='invInput100w' value={sizeMan.waist.xxs} onChange={(e) => {
                        setSizeMan({...sizeMan, waist:{...sizeMan.waist, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist.xs} onChange={(e) => {
                        setSizeMan({...sizeMan, waist:{...sizeMan.waist, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist.s} onChange={(e) => {
                        setSizeMan({...sizeMan, waist:{...sizeMan.waist, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist.m} onChange={(e) => {
                        setSizeMan({...sizeMan, waist:{...sizeMan.waist, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist.l} onChange={(e) => {
                        setSizeMan({...sizeMan, waist:{...sizeMan.waist, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist.xl} onChange={(e) => {
                        setSizeMan({...sizeMan, waist:{...sizeMan.waist, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist.xxl} onChange={(e) => {
                        setSizeMan({...sizeMan, waist:{...sizeMan.waist, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Obwód pasa</td>
                    <td><input className='invInput100w' value={sizeMan.waist_below.xxs} onChange={(e) => {
                        setSizeMan({...sizeMan, waist_below:{...sizeMan.waist_below, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist_below.xs} onChange={(e) => {
                        setSizeMan({...sizeMan, waist_below:{...sizeMan.waist_below, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist_below.s} onChange={(e) => {
                        setSizeMan({...sizeMan, waist_below:{...sizeMan.waist_below, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist_below.m} onChange={(e) => {
                        setSizeMan({...sizeMan, waist_below:{...sizeMan.waist_below, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist_below.l} onChange={(e) => {
                        setSizeMan({...sizeMan, waist_below:{...sizeMan.waist_below, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist_below.xl} onChange={(e) => {
                        setSizeMan({...sizeMan, waist_below:{...sizeMan.waist_below, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.waist_below.xxl} onChange={(e) => {
                        setSizeMan({...sizeMan, waist_below:{...sizeMan.waist_below, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Obwód bioder</td>
                    <td><input className='invInput100w' value={sizeMan.hips.xxs} onChange={(e) => {
                        setSizeMan({...sizeMan, hips:{...sizeMan.hips, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.hips.xs} onChange={(e) => {
                        setSizeMan({...sizeMan, hips:{...sizeMan.hips, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.hips.s} onChange={(e) => {
                        setSizeMan({...sizeMan, hips:{...sizeMan.hips, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.hips.m} onChange={(e) => {
                        setSizeMan({...sizeMan, hips:{...sizeMan.hips, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.hips.l} onChange={(e) => {
                        setSizeMan({...sizeMan, hips:{...sizeMan.hips, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.hips.xl} onChange={(e) => {
                        setSizeMan({...sizeMan, hips:{...sizeMan.hips, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.hips.xxl} onChange={(e) => {
                        setSizeMan({...sizeMan, hips:{...sizeMan.hips, xxl:e.target.value}})
                    }}/></td>
                </tr>
                <tr>
                    <td>Długość rękawa</td>
                    <td><input className='invInput100w' value={sizeMan.sleeve.xxs} onChange={(e) => {
                        setSizeMan({...sizeMan, sleeve:{...sizeMan.sleeve, xxs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.sleeve.xs} onChange={(e) => {
                        setSizeMan({...sizeMan, sleeve:{...sizeMan.sleeve, xs:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.sleeve.s} onChange={(e) => {
                        setSizeMan({...sizeMan, sleeve:{...sizeMan.sleeve, s:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.sleeve.m} onChange={(e) => {
                        setSizeMan({...sizeMan, sleeve:{...sizeMan.sleeve, m:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.sleeve.l} onChange={(e) => {
                        setSizeMan({...sizeMan, sleeve:{...sizeMan.sleeve, l:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.sleeve.xl} onChange={(e) => {
                        setSizeMan({...sizeMan, sleeve:{...sizeMan.sleeve, xl:e.target.value}})
                    }}/></td>
                    <td><input className='invInput100w' value={sizeMan.sleeve.xxl} onChange={(e) => {
                        setSizeMan({...sizeMan, sleeve:{...sizeMan.sleeve, xxl:e.target.value}})
                    }}/></td>
                </tr>
            </table>
        </>
    )
}

export default SizesMen