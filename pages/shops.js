import Navbar from '../components/navbar'

const Shops = () => {
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <h1>
                        Lista sklepów
                    </h1>
                </div>
                <div className="row">
                    <div className="d-flex">
                        <div className="orangeBorder">
                            <p style={{margin:'0 0 0 10px'}}>
                                Brakuje jakiegoś sklepu? Pomóż nam uzupełnić bazę!
                            </p>
                            <a href='/addShop'>
                                <button className="orangeButton br-20 ml-10" style={{width:'120px', height:'40px', margin:'10px 10px 10px 10px'}}>Dodaj!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Shops;