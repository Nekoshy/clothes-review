import Shops from "../../../models/Shops";
import dbConnect from "../../../util/mongodb";

export default async function getShops(req, res) {
    await dbConnect()
    const shops = await Shops.find({})
    res.status(200).json({shops})
}