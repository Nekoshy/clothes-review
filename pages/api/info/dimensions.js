import dbConnect from "../../../util/mongodb";
import User from "../../../models/Users";
import UserDimensions from "../../../models/UserDimensions";
import mongoose from "mongoose";
import {useContext} from "react";
import {LoginContext} from "../../../context/logincontext";
import {checkU} from "../../../util/checkU";
import jwt_decode from "jwt-decode";

export default async function getDimensions(req, res)  {
	const {auth} = req.cookies;
	const {user_id} = jwt_decode(auth)
	const {gender} = await User.findById(user_id, "gender");
	const dimensions = await UserDimensions.find({userId:user_id}, "dimensionName value").exec();
	console.log(gender)
	console.log(dimensions)
	res.status(200).json({gender, dimensions})
};