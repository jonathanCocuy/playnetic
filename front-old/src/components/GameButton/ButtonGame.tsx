interface GameButtonProps {
    name: string;
    onClick: () => void;
}

export const GameButton = ({ name, onClick }: GameButtonProps) => {
    return (
        <button 
            className="w-[150px] h-10 text-white text-sm font-semibold overflow-hidden relative py-[10px] px-5 rounded-[7px] tracking-[2px] bg-transparent uppercase transition-all duration-200 ease-in shadow-none border border-[rgb(61,106,255)] flex items-center justify-center hover:transition-all hover:duration-200 hover:ease-out hover:bg-[rgb(61,106,255)] hover:shadow-[0_0_30px_5px_rgba(0,142,236,0.815)] hover:before:animate-[shimmer-effect_0.5s_0s_linear] before:content-[''] before:w-0 before:h-[86%] before:block before:absolute before:top-[7%] before:left-0 before:opacity-0 before:bg-white before:skew-x-[-20deg] before:shadow-[0_0_50px_30px_#fff] active:shadow-none active:transition-[box-shadow] active:duration-200 active:ease-in" 
            onClick={onClick}
        >
            {name}
        </button>
    );
}; 
