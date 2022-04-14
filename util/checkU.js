import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export const checkU = () => {
    const token = Cookies.get('auth');
    const decode = jwt_decode(token)
    console.log(decode);
    console.log(decode.username[0]);
    return decode.username[0];
}