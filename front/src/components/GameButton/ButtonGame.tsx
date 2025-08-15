import "./gamebutton.scss";

interface GameButtonProps {
    name: string;
    onClick?: () => void;
}

export const GameButton = ({ name, onClick }: GameButtonProps) => {
    return <button className="button_game" onClick={onClick}>{name}</button>;
};
