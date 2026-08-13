import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "../Reducers/BookingsReducer.js";
import Bookings from './Bookings.js';

// Mock dispatch function
const mockDispatch = jest.fn();

test('Renders the BookingForm heading', () => {
    render(
        <Bookings //Since the element requires props by default, placed dummies
            availableTimes={["17:00", "18:00", "19:00"]}
            dispatch={mockDispatch}
        />
    );
    const h1Element = screen.getByText("Reserve a Table");
    expect(h1Element).toBeInTheDocument();
});

// Test initializeTimes
test('initializeTimes returns the correct expected value', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
});

// Test updateTimes
test('updateTimes returns the same value as the provided state', () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE_TIMES", payload: "2025-01-15" };
    const result = updateTimes(currentState, action);
    //action is currently irrelevant since updateTimes has no behaviors set
    expect(result).toEqual(currentState);
});

// This ensures a default behavior in case of non-specified action
test('updateTimes returns the same state for unknown action types', () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNKNOWN_ACTION" };
    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
});