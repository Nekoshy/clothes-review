import Navbar from '../components/navbar'
// import User from "../models/Users";
import {useContext, useEffect, useState} from "react";
import {LoginContext} from "../context/logincontext";
import axios from 'axios'

const Profile = () => {
    const [gender, setGender] = useState("");
    const [dimension, setDimension] = useState();
    useEffect( () => {
         axios.get('/api/info/dimensions').then(res => {
            setGender(res.data.gender === "K" ? "Kobieta" : "Mężczyzna");
            setDimension(res.data.dimensions)

        })
    }, [])

    console.log(dimension)
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row text-center">
                    <h1>Mój profil</h1>
                </div>
                <div className="row">
                    <div className="orangeBorder d-flex" style={{width:'500px', margin:'auto'}}>
                        <div className='row'>
                            <div className="orangeBorder" style={{width:'380px', margin:'40px auto 0 auto ', height:'40px'}}>
                                <p className='pl-15'>Płeć: {gender}</p>
                            </div>
                        </div>
                        {dimension?.map((element) => {
                            if (element.dimensionName === 'height') {
                            return (
                                <div className='row' key={element._id}>
                                    <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                        <p className='pl-15'>{

                                                `Wzrost: ${element.value}`

                                        }</p>
                                    </div>
                                </div>
                            ) }
                            else if (element.dimensionName === 'chest') {
                                return (
                                    <div className='row' key={element._id}>
                                        <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                            <p className='pl-15'>{

                                                `Obwód klatki piersiowej: ${element.value}`

                                            }</p>
                                        </div>
                                    </div>
                                ) }
                            else if (element.dimensionName === 'waist') {
                                return (
                                    <div className='row' key={element._id}>
                                        <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                            <p className='pl-15'>{

                                                `Obwód talii: ${element.value}`

                                            }</p>
                                        </div>
                                    </div>
                                ) }
                            else if (element.dimensionName === 'waist_below') {
                                return (
                                    <div className='row' key={element._id}>
                                        <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                            <p className='pl-15'>{

                                                `Obwód w pasie: ${element.value}`

                                            }</p>
                                        </div>
                                    </div>
                                ) }
                            else if (element.dimensionName === 'hips') {
                                return (
                                    <div className='row' key={element._id}>
                                        <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                            <p className='pl-15'>{

                                                `Obwód w biodrach: ${element.value}`

                                            }</p>
                                        </div>
                                    </div>
                                ) }
                            else if (element.dimensionName === 'sleeve') {
                                return (
                                    <div className='row' key={element._id}>
                                        <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                            <p className='pl-15'>{

                                                `Długość rękawa: ${element.value}`

                                            }</p>
                                        </div>
                                    </div>
                                ) }
                        })}

                        <div className='row d-flex justify-center'>
                            <button className='orangeButton' style={{width:'200px', margin:'15px 0 25px 0'}}>
                                Edytuj dane
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;