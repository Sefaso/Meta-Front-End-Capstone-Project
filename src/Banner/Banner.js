import "./Banner.css";
import { useNavigate } from "react-router-dom";

    function Banner() {
        const navigate = useNavigate();

        const toBookings = () => {
            navigate("/booking");
        };

        return (
            <section className="hero">
                <h1>Little Lemon Chicago</h1>
                <p className="lead">
                    We are a family owned Mediterranean restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
                <button className="btn-primary" onClick={toBookings}>Reserve a Table</button>
            </section>
        );
    }

export default Banner;