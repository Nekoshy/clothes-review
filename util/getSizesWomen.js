export default function getSizesWoman(a) {
    const sizesInfoWomen = {
        height: {xxs: '', xs: '', s: '', m: '', l: '', xl: '', xxl: ''},
        chest: {xxs: '', xs: '', s: '', m: '', l: '', xl: '', xxl: ''},
        waist: {xxs: '', xs: '', s: '', m: '', l: '', xl: '', xxl: ''},
        waist_below: {xxs: '', xs: '', s: '', m: '', l: '', xl: '', xxl: ''},
        hips: {xxs: '', xs: '', s: '', m: '', l: '', xl: '', xxl: ''},
        sleeve: {xxs: '', xs: '', s: '', m: '', l: '', xl: '', xxl: ''}
    };

    console.log(sizesInfoWomen.height.xxs)

    a.map(element => {
            if (element.gender === 'K') {
                if (element.dimensionName === 'height') {
                    const value = element.value
                    if (element.sizes === 'XXS') {
                    sizesInfoWomen.height.xxs = value;
                    } else if (element.sizes === 'XS') {
                        sizesInfoWomen.height.xs = value;
                    } else if (element.sizes === 'S') {
                        sizesInfoWomen.height.s = value;
                    } else if (element.sizes === 'M') {
                        sizesInfoWomen.height.m = value;
                    } else if (element.sizes === 'L') {
                        sizesInfoWomen.height.l = value;
                    } else if (element.sizes === 'XL') {
                        sizesInfoWomen.height.xl = value;
                    } else if (element.sizes === 'XXL') {
                        sizesInfoWomen.height.xxl = value;
                    }
                }
                // } else if (element.dimensionName === 'chest') {
                //     const size = element.sizes
                //     const value = element.value
                //     setSizesInfoWomen({...sizesInfoWomen, chest:{...sizesInfoWomen.chest, [size.toLowerCase()]:value}})
                // } else if (element.dimensionName === 'waist') {
                //     const size = element.sizes
                //     const value = element.value
                //     setSizesInfoWomen({...sizesInfoWomen, waist:{...sizesInfoWomen.waist, [size.toLowerCase()]:value}})
                // } else if (element.dimensionName === 'waist_below') {
                //     const size = element.sizes
                //     const value = element.value
                //     setSizesInfoWomen({...sizesInfoWomen, waist_below:{...sizesInfoWomen.waist_below, [size.toLowerCase()]:value}})
                // } else if (element.dimensionName === 'hips') {
                //     const size = element.sizes
                //     const value = element.value
                //     setSizesInfoWomen({...sizesInfoWomen, hips:{...sizesInfoWomen.hips, [size.toLowerCase()]:value}})
                // } else {
                //     const size = element.sizes
                //     const value = element.value
                //     setSizesInfoWomen({...sizesInfoWomen, sleeve:{...sizesInfoWomen.sleeve, [size.toLowerCase()]:value}})
                // }
            }
        }
    );
    return sizesInfoWomen;
}