import React, { useRef } from "react";
import "./gamecard.scss";
// Components
import { GameButton } from "../GameButton/ButtonGame";

interface GameCardProps extends React.PropsWithChildren {
  title: string;
  image: string;
  className?: string;
  description: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const COLORS = [
  "rgba(75, 0, 130, 0.3)",
  "rgba(221, 53, 10, 0.3)",
  "rgba(205, 92, 92, 0.3)",
  "rgba(34, 139, 34, 0.3)",
  "rgba(255, 165, 0, 0.3)",
  "rgba(128, 0, 128, 0.3)",
  "rgba(0, 206, 209, 0.3)",
  "rgba(255, 99, 71, 0.3)",
  "rgba(124, 252, 0, 0.3)",
  "rgba(255, 215, 0, 0.3)",
  "rgba(0, 191, 255, 0.3)",
  "rgba(220, 20, 60, 0.3)",
  "rgba(255, 140, 0, 0.3)",
  "rgba(46, 139, 87, 0.3)",
  "rgba(106, 90, 205, 0.3)",
  "rgba(255, 20, 147, 0.3)",
  "rgba(199, 21, 133, 0.3)",
  "rgba(60, 179, 113, 0.3)",
  "rgba(30, 144, 255, 0.3)",
  "rgba(173, 216, 230, 0.3)"
]

const getRandomColor = () => Math.floor(Math.random() * COLORS.length);

const GameCard: React.FC<GameCardProps> = ({
  children,
  className = "",
  spotlightColor,
  title,
  image,
  description
}) => {

  const autoColor = COLORS[getRandomColor()] as `rgba(${number}, ${number}, ${number}, ${number})`;

  const SpotlightColor = spotlightColor || autoColor;

  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", SpotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
      <img src={image} alt="DND" className="game_card_image" />
      <div className="container_text">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="container_button">
        <GameButton name="J U G A R" />
      </div>
    </div>
  );
};

export default GameCard;