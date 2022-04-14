import dbConnect from "../../../util/mongodb";
import User from "../../../models/Users"
import UserDimensions from "../../../models/UserDimensions";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";


export default async function register(req, res) {
    const {username, email, password, gender, height, chest, waist, waist_below, hips, sleeve} = req.body
    await dbConnect()
    if (!(email && password && username && gender)) {
        res.status(400).send("All input is required");
    }
    const oldUser = await User.findOne({ email });
    if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        gender,
    });
    const dimension = [['height', height], ['chest', chest], ['waist', waist], ['waist_below', waist_below], ['hips', hips], ['sleeve', sleeve]];
    for (const [dimensionName,dimensionValue] of dimension) {
    const dimensions = await UserDimensions.create({
        userId: user._id,
        dimensionName: dimensionName,
        value: dimensionValue,
    })
    }

    res.status(201).json(user, dimension);
}