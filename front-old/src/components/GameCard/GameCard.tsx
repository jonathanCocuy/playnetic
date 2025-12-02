import React, { useRef } from "react";
// Components
import { GameButton } from "../GameButton/ButtonGame";

interface GameCardProps extends React.PropsWithChildren {
    title: string;
    image: string;
    className?: string;
    spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
    difficulty: "easy" | "medium" | "hard";
    gameId?: string;
    onGameSelect?: (gameId: string) => void;
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
    "rgba(173, 216, 230, 0.3)",
];

const getRandomColor = () => Math.floor(Math.random() * COLORS.length);

const GameCard: React.FC<GameCardProps> = ({
    children,
    className = "",
    spotlightColor,
    title,
    image,
    gameId,
    onGameSelect,
}) => {
    const autoColor = COLORS[getRandomColor()] as `rgba(${number}, ${number}, ${number}, ${number})`;

    const SpotlightColor = spotlightColor || autoColor;

    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", SpotlightColor);
    };

    function handleGameSelect(): void {
        if (gameId && onGameSelect) {
            onGameSelect(gameId);
        }
    }

    console.log(children)

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`w-[300px] p-6 overflow-hidden min-h-[300px] relative rounded-3xl border border-[#222] bg-[#2c144d] flex text-center items-center flex-col justify-between gap-[10px] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-300 before:ease-[var(--spotlight-color)] before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),var(--spotlight-color),transparent_80%)] hover:before:opacity-60 focus-within:before:opacity-60 ${className}`}
            style={{
                '--mouse-x': '50%',
                '--mouse-y': '50%',
                '--spotlight-color': SpotlightColor,
            } as React.CSSProperties}
        >
            {children}
            <img src={image} alt="DND" className="w-full h-[150px] object-cover rounded-2xl" />
            <div className="flex text-center flex-col justify-center gap-[10px]">
                <h1 className="text-[22px] font-semibold text-center">{title}</h1>
            </div>
            <div className="w-full flex items-center justify-center">
                <GameButton
                    name="J U G A R"
                    onClick={() => handleGameSelect()}
                />
            </div>
        </div>
    );
};

export default GameCard;
