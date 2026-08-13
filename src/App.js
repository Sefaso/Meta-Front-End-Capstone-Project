import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"; //For url containment and setting
import Homepage from "./Homepage/Homepage.js";
import Bookings from "./Bookings/Bookings.js";
import ConfirmedBooking from "./Bookings/ConfirmedBooking.js";
import { useReducer, useEffect } from "react"; //For reducer creation
import { initializeTimes, updateTimesAsync, updateTimes } from "./Reducers/BookingsReducer.js"; //What to fill reducer with

function App() {
  // useReducer for availableTimes
  // Needs to start with default array to prevent timing (trad vs async) break
  const [availableTimes, dispatch] = useReducer( // useReducer goes state, function then viceversa inside
    updateTimes, // dispatch calls updateTimes
    ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] //availableTimes
  );

  //This ensures you actually retrieve the available times asynchronously
  useEffect(() => {
    const loadTimes = async () => { //Creates function
      const initialTimes = await initializeTimes(new Date()); // Call the async function from the reducer file
      dispatch({ type: "UPDATE_TIMES", payload: initialTimes }); // This triggers updateTimes with the payload
    };
    loadTimes(); //Executes function
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking"
          element={
            <Bookings
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
        <Route path="/booking/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;