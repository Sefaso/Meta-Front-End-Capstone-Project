import "./Bookings.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateTimesAsync } from "../Reducers/BookingsReducer.js"; //Reducer file
import { submitAPI } from "../Utilities/api.js";
import Navbar from "../Navbar/Navbar.js";

function Bookings({ availableTimes, dispatch }) {
    /*Available times is the initial state, dispatch references updateTimes
    Such is the trick of useReducer*/
    const navigate = useNavigate();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [partySize, setPartySize] = useState(1);
    const [ocassions, setOcassions] = useState([
        "Birthday",
        "Anniversary",
    ]);
    const [ocassion, setOcassion] = useState(ocassions[0]);

    // Handle date change — dispatches action to reducer
    const handleDateChange = async (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        // Call the async function from the reducer file
        const times = await updateTimesAsync(new Date(selectedDate));
        if (times) { // If an answer is received
            dispatch({ type: "UPDATE_TIMES", payload: times }); // Answer get passed to updateTimes through dispatch
        }
    };

    //Convert availableTimes prop to array
    const timesArray = Array.isArray(availableTimes) ? availableTimes : [];

    const submitForm = (formData) => {
        const response = submitAPI(formData);
        if (response) {
            navigate("/booking/confirmed");
        } else {
            // Optional: show an error message if submission fails
            alert("Booking failed. Please try again.");
        };
    };

    //RENDER
    return (
        <>
            <Navbar />
            <div className="container"> {/* Whole form container */}
                <h1>Reserve a Table</h1>
                <p className="lead">Fill in the form below to book your table.</p>

                {/* Date input */}
                <form className="booking-form" onSubmit={submitForm}>
                    <div className="form-group">
                        <label htmlFor="res-date">Choose date: </label>
                        <input
                            type="date"
                            id="res-date"
                            className="form-control"
                            value={date}
                            onChange={handleDateChange}
                            required
                        />
                    </div>

                    {/* Time chooser */}
                    <div className="form-group">
                        <label htmlFor="res-time">Choose time: </label>
                        {/* Chooses from available times */}
                        <select
                            id="res-time"
                            className="form-control"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            {/* Displays available times */}
                            {timesArray.map((timeSlot) => (
                                <option key={timeSlot} value={timeSlot}>
                                    {timeSlot}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Party sizer */}
                    <div className="form-group">
                        <label htmlFor="guests">Number of guests: </label>
                        <input
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            className="form-control"
                            value={partySize}
                            onChange={(e) => setPartySize(Number(e.target.value))}
                        />
                    </div>

                    {/* Format of gathering */}
                    <div className="form-group">
                        <label htmlFor="occasion">Occasion: </label>
                        {/* Chooses from ocassions presets */}
                        <select
                            id="occasion"
                            className="form-control"
                            value={ocassion}
                            onChange={(e) => setOcassion(e.target.value)}
                        >
                            {/* Displays ocassions presets */}
                            {ocassions.map((ocassion) => (
                                <option key={ocassion} value={ocassion}>
                                    {ocassion}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn-primary">
                        Make Your reservation
                    </button>
                </form>
            </div>
        </>
    );
}

export default Bookings;