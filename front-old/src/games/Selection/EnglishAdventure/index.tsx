import { useState } from "react";
import EnglishAdventureComponent from "./components/Game/MainGameComponent";

const EnglishAdventure = () => {
    const [levelCount, setLevelCount] = useState(1);

    return (
        <EnglishAdventureComponent 
            levelCount={levelCount} 
            setLevelCount={setLevelCount} 
        />
    );
};

export default EnglishAdventure;
