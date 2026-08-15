import "./Homepage.css";
import Navbar from "../Navbar/Navbar.js";
import Banner from "../Banner/Banner";
import Specials from "../Specials/Specials";
import Reviews from "../Reviews/Reviews";
import ChicagoLocation from "../ChicagoLocation/ChicagoLocation";

function HomePage() {
    return (
        <>
            <Navbar />
            <Banner />
            <Specials />
            <Reviews />
            <ChicagoLocation />
        </>
    );
}

export default HomePage;