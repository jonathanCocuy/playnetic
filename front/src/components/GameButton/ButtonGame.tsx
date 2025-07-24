import "./gamebutton.scss";

interface GameButtonProps {
  name: string;
}

export const GameButton = ({ name }: GameButtonProps) => {

  return (
    <button className="button_game">
      {name}
    </button>
  );
};
