import dbConnect from "../../../util/mongodb";
import User from "../../../models/Users"
import cookie from "cookie";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import React, {createContext, useContext, useState} from "react";
import {UserContext} from "../../../context/usercontext";

export default async function login(req, res) {
    const {username, password} = req.body
    await dbConnect()
    const user = await User.findOne({username})
    if (!user) {
        res.json({
            error: "user not found"
        })
        res.end()
        return
    }
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        res.setHeader("Set-Cookie", cookie.serialize("auth", token, {
            httpOnly:false,
            secure:process.env.NODE_ENV!=="development",
            sameSite:"strict",
            maxAge:1800,
            path:"/"
        }))
        // res.writeHead(302, { Location: '/' });
        res.status(200).json({username});
        res.end()
        return;
    }
    res.status(400).send("Invalid Credentials");
}