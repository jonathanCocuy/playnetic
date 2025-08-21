import { useState, useEffect } from "react";

interface Option {
    id: number;
    content: string;
    image?: { path: string };
}

interface ISubLevel {
    data: {
        id: number;
        text: string;
        title: string;
        answer: string;
        options: Option[];
        imageOne?: string;
        imageTwo?: string;
        imageThree?: string;
    };
    onSubmit: (isCorrect: boolean) => void;
    level: number;
}

export const Sublevel = ({ data, onSubmit }: ISubLevel) => {
    const [dataToShow, setDataToShow] = useState(data);
    const [selected, setSelected] = useState<number | null>(null);
    const [validateActiveSubmit, setValidateActiveSubmit] = useState(false);

    useEffect(() => {
        setDataToShow(data);
        // Reset selected state when data changes (new level)
        setSelected(null);
        setValidateActiveSubmit(false);
    }, [data]);

    const handleMarkOption = (id: number) => {
        setSelected(id);
        setValidateActiveSubmit(true);
    };

    const validateActions = () => {
        setValidateActiveSubmit(false);
        const selectedOption = dataToShow.options.find(
            (option: Option) => option.id === selected
        );
        if (selectedOption) {
            const isCorrect = selectedOption.content === dataToShow.answer;
            // If answer is incorrect, clear the selection
            if (!isCorrect) {
                setSelected(null);
            }
            return isCorrect;
        }
        return false;
    };

    return (
        <div className="sublevel_container">
            <div className="container_text_options">
                <div className="container">
                    <p className="text">{dataToShow.text}</p>
                </div>
                <div className="container_options">
                    {dataToShow.options.map((option) => (
                        <div
                            key={option.id}
                            onClick={() => handleMarkOption(option.id)}
                            className={option.id === selected ? "option_word_selected" : "option_word"}
                        >
                            <div>
                                <p>{option.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={validateActiveSubmit ? "buttons_selecteds" : "buttons"}>
                <button className="submit-button" onClick={() => onSubmit(validateActions())}>
                    {"CONFIRMAR"}
                </button>
            </div>
        </div>
    );
};
