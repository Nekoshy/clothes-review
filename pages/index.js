import Navbar from '../components/navbar'

const Home = () => {
    const { API_PORT } = process.env;
    const port = process.env.PORT || API_PORT;
    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1>Test</h1>
            </div>
        </div>
    );
}
export default Home;