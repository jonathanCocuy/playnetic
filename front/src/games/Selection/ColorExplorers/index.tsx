import { useState } from "react";
import ColorExplorersComponent from "./components/Game/MainGameComponent";

const ColorExplorers = () => {
    const [levelCount, setLevelCount] = useState(1);

    return (
        <ColorExplorersComponent 
            levelCount={levelCount} 
            setLevelCount={setLevelCount} 
        />
    );
};

export default ColorExplorers;
