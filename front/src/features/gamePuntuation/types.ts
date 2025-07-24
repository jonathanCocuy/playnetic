export interface gameState {
    currentLevel: number; // 1 - 3
    currentExercise: number | string; // 1 - 5
    pointsGame: number; // 0 - 150
    totalPoints: number;
    gamesCompleted: number;
}