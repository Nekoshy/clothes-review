import Shops from "../../../models/Shops";
import Size from "../../../models/Sizes"
import SizeDimensionShop from "../../../models/SizeDimensionShop";
import dbConnect from "../../../util/mongodb";


export default async (req, res) => {
    await dbConnect();
    const sizes = await Size.find({gender:'K',sizes:'XXS'}).exec()
    // console.log(sizes);
    // console.log('ok')
    const {sizeWoman, sizeMan, shopName, shopLink} = req.body;
    const shop = await Shops.create(
        {
            name:shopName,
            link:shopLink
        }
    )
    for (const [key, value] of Object.entries(sizeWoman)) {
        for (const [keyO, valueO] of Object.entries(value)) {
            // console.log(key, keyO, valueO);
            const sizes = await Size.find({gender:'K',sizes:`${keyO.toUpperCase()}`})
            console.log(valueO)
            if (valueO){
            const sizeDim = await SizeDimensionShop.create({
                sizeId:sizes[0]._id.toString(),
                shopId:shop._id,
                dimensionName:key,
                value: valueO,
                show:true,
            })}
        }
    }
    for (const [key, value] of Object.entries(sizeMan)) {
        for (const [keyO, valueO] of Object.entries(value)) {
            // console.log(key, keyO, valueO);
            const sizes = await Size.find({gender:'M',sizes:`${keyO.toUpperCase()}`})
            console.log(valueO)
            if (valueO){
                const sizeDim = await SizeDimensionShop.create({
                    sizeId:sizes[0]._id.toString(),
                    shopId:shop._id,
                    dimensionName:key,
                    value: valueO,
                    show:true,
                })}
        }
    }
    res.status(200);
}
