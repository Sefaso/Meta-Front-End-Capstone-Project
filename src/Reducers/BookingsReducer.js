//THESE ARE FUNCTIONS THAT CAN BE USED BY useReducer (See App.js)

import { fetchAPI } from "../Utilities/api.js";

// Initialize times state (Could be simple array, but a function improves performance)
export const initializeTimes = async (date) => {
    try {
        // fetchAPI is globally available due to the script on index.html
        return await fetchAPI(date);
    } catch (error) {
        console.error("Failed to initialize times:", error);
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // fallback
    }
};

// Update times based on action
export const updateTimesAsync = async (date) => {
    try {
        // fetchAPI is globally available due to the script on index.html
        return await fetchAPI(date);
    } catch (error) {
        console.error("Failed to update times:", error);
        return null; // Return null so we can handle it in the component
    }
};

export const updateTimes = (state, action) => {
    return action.payload;
};