import { useState } from "react";
import FootballQuizComponent from "./components/Game/MainGameComponent";

const FootballQuiz = () => {
    const [levelCount, setLevelCount] = useState(1);

    return (
        <FootballQuizComponent 
            levelCount={levelCount} 
            setLevelCount={setLevelCount} 
        />
    );
};

export default FootballQuiz;
