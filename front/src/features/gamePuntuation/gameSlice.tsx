import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gameState } from "./types";

const initialState: gameState = {
    currentLevel: 1,
    currentExercise: 1,
    pointsGame: 0,
    totalPoints: 0,
    gamesCompleted: 0,
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
        setPointsGame: (state, action: PayloadAction<number>) => {
            state.pointsGame = action.payload;
        },
  
        // Set total accumulated points
        addTotalPoints: (state, action: PayloadAction<number>) => {
            state.totalPoints += action.payload;
        },
  
        // Set number of games completed
        setGamesCompleted: (state, action: PayloadAction<number>) => {
            state.gamesCompleted = action.payload;
        },
    }
})

export const { setCurrentLevel, setCurrentExercise, setPointsGame, addTotalPoints, setGamesCompleted } = gameSlice.actions;
export default gameSlice.reducer;
