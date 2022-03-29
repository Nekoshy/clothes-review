import dbConnect from '../../util/mongodb'
import User from '../../models/Users'
import Shop from '../../models/Shops'
import UserDimension from "../../models/UserDimensions";
import Rating from "../../models/Ratings";
import SizeDimensionShop from "../../models/SizeDimensionShop";
import Dimension from "../../models/Dimensions";
import Size from "../../models/Sizes"

export default async (reg,res) => {
    await dbConnect()
    console.log(User.find())
    const test = await User.find({})
    await Shop.find({})
    await UserDimension.find({})
    await Rating.find({})
    await SizeDimensionShop.find({})
    await Dimension.find({})
    await Size.find({})
    res.json(test)
}