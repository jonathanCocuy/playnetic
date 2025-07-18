import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface gameState {
    currentLevel: number; // 1 - 3
    currentExercise: number; // 1 - 5
    pointsGame: number; // 0 - 150
    totalPoints: number;
    gamesCompleted: number;
}

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
