import Link from 'next/link';
import {useContext, useEffect} from "react";
import {UserContext} from "../context/usercontext";
import Script from "next/script";
import {LoginContext} from "../context/logincontext";
import axios from "axios";

const Navbar = () => {
    const {logged, username} = useContext(LoginContext);
    // const id = axios.post('/api/info/dimensions',{username}).then(res => {console.log(res.data[0]._id)});
    // console.log(id);
    if (typeof window !== 'undefined') {
        // console.log('You are on the browser')
        // document.getElementById('username').innerHTML = localStorage.getItem('username');
        // console.log(username)
        // 👉️ can use localStorage here
    } else {
        // console.log('You are on the server')
        // 👉️ can't use localStorage
    }
    return (
        <div>
            <ul>
                <li><a href='/'><img src='cloth-hanger.png' height='45px'/><img src='CRv2.png' className='crv'/></a>
                </li>
                <li><Link href="/shops"><a>Lista sklepów</a></Link></li>
                {/*{`${logged[0]}`}*/}
                {logged[0] ? <li><a href='/profile' style={{margin: '0 10px 0 0'}}>{`${username[0]}`}<img src='user.png'
                                                                                                          height='35px'
                                                                                                          className='usericn'/></a><a
                        href='api/auth/logout'>Wyloguj się</a></li> :
                    <li><a href='/login'>Zaloguj się<img src='user.png' height='35px' className='usericn'/></a></li>}
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
                padding-right: 10px;
                border-right: 3px solid #ed6b23;
                }
            `}</style>
        </div>
    );
}
export default Navbar;