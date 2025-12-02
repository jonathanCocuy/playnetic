import { useState } from "react";
import DisneyQuizComponent from "./components/Game/MainGameComponent";

const DisneyQuiz = () => {
    const [levelCount, setLevelCount] = useState(1);

    return (
        <DisneyQuizComponent 
            levelCount={levelCount} 
            setLevelCount={setLevelCount} 
        />
    );
};

export default DisneyQuiz;
