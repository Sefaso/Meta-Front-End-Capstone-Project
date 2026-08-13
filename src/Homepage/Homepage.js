import "./Homepage.css";
import Nav from "../Navbar/Navbar.js";
import Banner from "../Banner/Banner";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import ChicagoLocation from "../ChicagoLocation/ChicagoLocation";

function HomePage() {
    return (
        <>
            <Nav />
            <Banner />
            <Specials />
            <CustomersSay />
            <ChicagoLocation />
        </>
    );
}

export default HomePage;