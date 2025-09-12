import { Sublevel } from "./Game";

interface Option {
    id: number;
    content: string;
    image?: { path: string };
}

interface ExerciseData {
    id: number;
    text: string;
    title: string;
    answer: string;
    options: Option[];
    images: { id: number; image: string; }[];
}

interface LevelProps {
    level: number;
    dataLevel: ExerciseData[];
    setLevel: (level: number) => void;
    onSubmit: (isCorrect: boolean) => void;
    setDataLevel: React.Dispatch<React.SetStateAction<ExerciseData[]>>;
}

export const Level1 = (props: LevelProps) => {
    const PROPS_LEVEL = props.level;
    return (
        <>
            { PROPS_LEVEL === 1 ? (
                    <Sublevel data={props.dataLevel[0]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 2 ? (
                    <Sublevel data={props.dataLevel[1]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 3 ? (
                    <Sublevel data={props.dataLevel[2]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 4 ? (
                    <Sublevel data={props.dataLevel[3]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 5 ? ( 
                    <Sublevel data={props.dataLevel[4]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : null
            }
        </>
    );
};

export const Level2 = (props: LevelProps) => {
    const PROPS_LEVEL = props.level;
    return (
        <>
            { PROPS_LEVEL === 6 ? (
                    <Sublevel data={props.dataLevel[0]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 7 ? (
                    <Sublevel data={props.dataLevel[1]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 8 ? (
                    <Sublevel data={props.dataLevel[2]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 9 ? (
                    <Sublevel data={props.dataLevel[3]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 10 ? ( 
                    <Sublevel data={props.dataLevel[4]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : null
            }
        </>
    );
};

export const Level3 = (props: LevelProps) => {
    const PROPS_LEVEL = props.level;
    return (
        <>
            { PROPS_LEVEL === 11 ? (
                    <Sublevel data={props.dataLevel[0]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 12 ? (
                    <Sublevel data={props.dataLevel[1]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 13 ? (
                    <Sublevel data={props.dataLevel[2]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 14 ? (
                    <Sublevel data={props.dataLevel[3]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : PROPS_LEVEL === 15 ? ( 
                    <Sublevel data={props.dataLevel[4]} level={PROPS_LEVEL} onSubmit={props.onSubmit} />
                ) : null
            }
        </>
    );
}; 