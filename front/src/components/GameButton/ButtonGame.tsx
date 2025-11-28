import "./gamebutton.scss";

interface GameButtonProps {
    name: string;
    onClick: () => void; // Arrow function type
}

export const GameButton = ({ name, onClick }: GameButtonProps) => {
    return <button className="button-game" onClick={onClick}>{name}</button>;
}; 
