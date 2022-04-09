import * as jwt from "jsonwebtoken";
import {verify} from "jsonwebtoken";

export default async function auth(req, res) {
    const {auth} = req.cookies
    if (!auth) {
        res.status(401).send("Nie ma tokena");
    }
    else if (!verify(auth, process.env.TOKEN_KEY)) {
        res.status(402).send("Niepoprawny token")
    }
    else {
        res.status(200).send("OK")
    }
}