import dbConnect from "../../../util/mongodb";
import UserDimensions from "../../../models/UserDimensions";
import jwt_decode from "jwt-decode";
import SizeDimensionShop from "../../../models/SizeDimensionShop";

export default async (req, res) => {
    await dbConnect();
    const {auth} = req.cookies;
    const {id} = req.query;
    const sizesTable = ['XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'];
    const finallSizes = {m:'', k:''};
    if (auth) {
        const {user_id} = jwt_decode(auth)
        const userDimensions = await UserDimensions.find({userId:user_id}, '-_id -userId -__v')
        const dimen = await SizeDimensionShop.find({shopId:id}, '-shopId -show -__v -_id').populate({path:'sizeId', select:'gender sizes -_id'})
        let dimenDest = dimen.map((element) => {
            return {
                value:element.value,
                gender:element.sizeId.gender,
                sizes:element.sizeId.sizes,
                dimensionName:element.dimensionName,
            }
        })
        const dimensionM = dimenDest.filter(element => element.gender === 'M');
        const dimensionK = dimenDest.filter(element => element.gender === 'K');
        // console.log(dimensionK)
        const xm = [];
        const xk = [];
        // console.log(dimensionM)
        for (let element of userDimensions){
            for (let el of dimensionM) {
                if (element.dimensionName === el.dimensionName) {
                    if (element.value < el.value) {
                        xm.push(el.sizes)
                        break;
                    }
                }
            }
            for (let el of dimensionK) {
                if (element.dimensionName === el.dimensionName) {
                    if (element.value < el.value) {
                        xk.push(el.sizes)
                        break;
                    }
                }
            }
            // console.log(element)
        }
        // console.log(xm)
        // console.log(xk)
        for (let el of sizesTable) {
            if (xm.includes(el)) {
                finallSizes.m = el;
                break;
            }
        }
        for (let el of sizesTable) {
            if (xk.includes(el)) {
                finallSizes.k = el;
                break;
            }
        }
        // console.log(finallSizes)
        res.status(200).json(finallSizes);
    } else {
        res.status(401).end();
    }

}