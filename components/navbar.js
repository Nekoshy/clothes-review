import Link from 'next/link';
import {useContext} from "react";
import {LoginContext} from "../context/logincontext";

const Navbar = () => {
    const {logged, setLogged} = useContext(LoginContext);
    console.log(logged);
    return(
        <div>
            <ul>
                <li><a href='/'><img src='cloth-hanger.png' height='45px'/><img src='CRv2.png' className='crv'/></a></li>
                <li><Link href="/shops"><a>Lista sklepów</a></Link></li>
                {`${logged}`}
                {logged? <li><a href='/login'>Wyloguj się<img src='user.png' height='35px' className='usericn'/></a></li> : <li><a href='/login'>Zalogujj się<img src='user.png' height='35px' className='usericn'/></a></li>}
            </ul>
            <style jsx>{`
                ul {
                    width: 100%;
                    background: #ffffff;
                    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
                    color: #ed6b23;
                    list-style: none;
                    
                    height: 70px;
                    line-height: 70px;
                    padding-inline-start: 30px;
                    display: inline-block;
                }
                ul li {
                    font-size: 16px;
                    margin-right: 30px;
                    float: left;
                }
                ul li:last-child {
                float: right;
                padding-right: 30px;
                }
                ul li a {
                    color: #ed6b23;
                    text-decoration: none;
                }
                ul li a img {
                vertical-align: middle;
                }
                .crv {
                margin-left: 10px;
                }
                .usericn {
                margin-left: 10px;
                }
            `}</style>
        </div>
    );
}
export default Navbar;