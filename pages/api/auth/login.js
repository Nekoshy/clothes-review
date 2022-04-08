import dbConnect from "../../../util/mongodb";
import User from "../../../models/Users"
import cookie from "cookie";
import bcrypt from "bcrypt";

export default async function login(req, res) {
    const {username, password} = req.body
    await dbConnect()
    const user = await User.findOne({username})
    if (!user) {
        res.json({
            error: "user not find"
        })
        res.end()
        return
    }
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        user.token = token;
        res.status(200).json(user);
        // res.setHeader("Set-Cookie", cookie.serialize("auth", token, {
        //     httpOnly:true,
        //     secure:process.env.NODE_ENV!=="development",
        //     sameSite:"strict",
        //     maxAge:1800,
        //     path:"/"
        // }))
        // res.json({
        //     token:token
        // })
        // res.end()
    }
}