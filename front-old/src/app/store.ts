import { configureStore } from "@reduxjs/toolkit";

// Reducers
import gameReducer from "../features/gamePuntuation/gameSlice";

// Creates the central/main data store (almacén) for the platform
export const store = configureStore({
    reducer: {
        // This reducer is for POINTS in games
        game: gameReducer,
    }
})

// RootState, here is all available data
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch, here is all available actions
export type AppDispatch = typeof store.dispatch;