import Navbar from '../components/navbar'

const Profile = () => {
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
                                <p className='pl-15'>Płeć:</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                <p className='pl-15'>Wzrost:</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                <p className='pl-15'>Obwód klatki piersiowej:</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                <p className='pl-15'>Obwód talii:</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                <p className='pl-15'>Obwód pasa:</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="orangeBorder" style={{width:'380px', margin:'20px auto 0 auto ', height:'40px'}}>
                                <p className='pl-15'>Obwód bioder:</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="orangeBorder" style={{width:'380px', margin:'20px auto 20px auto ', height:'40px'}}>
                                <p className='pl-15'>Długość rękawa:</p>
                            </div>
                        </div>
                        <div className='row d-flex justify-center'>
                            <button className='orangeButton' style={{width:'200px', margin:'0 0 25px 0'}}>
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