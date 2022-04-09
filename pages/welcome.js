const auth = require("../middleware/auth");

export default async function welcome(auth, req, res) {
    return res.status(200).send("Welcome");
}