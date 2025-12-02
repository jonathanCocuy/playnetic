import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gameState } from "./types";

const initialState: gameState = {
    currentLevel: 1,
    currentExercise: 1,
    pointsGame: 0,
    totalPoints: 0,
    gamesCompleted: 0,
    color: "normal",
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        // Update current level
        setCurrentLevel: (state, action: PayloadAction<number>) => {
            state.currentLevel = action.payload;
        },
        
        // Update current exercise
        setCurrentExercise: (state, action: PayloadAction<number>) => {
            state.currentExercise = action.payload;
        },
        
        // Add points to the current game
        setPointsGame: (state, action: PayloadAction<{points: number, color: "green" | "red" | "normal"}>) => {
            state.pointsGame = action.payload.points;
            state.color = action.payload.color;
        },
  
        // Set total accumulated points
        addTotalPoints: (state, action: PayloadAction<number>) => {
            state.pointsGame += action.payload;
        },
  
        // Set number of games completed
        setGamesCompleted: (state, action: PayloadAction<number>) => {
            state.gamesCompleted = action.payload;
        },
    }
})

export const { setCurrentLevel, setCurrentExercise, setPointsGame, addTotalPoints, setGamesCompleted } = gameSlice.actions;
export default gameSlice.reducer;
