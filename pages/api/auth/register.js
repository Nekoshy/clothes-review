import dbConnect from "../../../util/mongodb";
import User from "../../../models/Users"
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";


export default async function register(req, res) {
    const {username, email, password, gender} = req.body
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

    res.status(201).json(user);
}