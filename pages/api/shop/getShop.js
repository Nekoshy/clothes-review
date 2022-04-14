import dbConnect from "../../../util/mongodb";
import Shops from "../../../models/Shops";
import SizeDimensionShop from "../../../models/SizeDimensionShop";
import Sizes from "../../../models/Sizes";

export default async function getShops(req, res) {
    const {id} = req.query;
    await dbConnect()
    const shop = await Shops.findById(id)
    const dimen = await SizeDimensionShop.find({shopId:shop._id.toString()}, '-shopId').populate({path:'sizeId', select:'gender sizes -_id'})
    res.status(200).json({shop, dimen})
}