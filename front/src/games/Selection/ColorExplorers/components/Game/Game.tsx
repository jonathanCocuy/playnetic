import { useState, useEffect } from "react";

interface Option {
    id: number;
    content: string;
}

interface Image {
    id: number;
    image: string;
}

interface ISubLevel {
    data: {
        id: number;
        text: string;
        title: string;
        answer: string;
        options: Option[];
        images: Image[];
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

    // This function determines which image should have a shadow
    const getImageShadowClass = (imageSrc: string) => {
        if (!selected) return "";
        
        const selectedOption = dataToShow.options.find(option => option.id === selected);
        if (!selectedOption) return "";
        // Find the image that corresponds to the selected option
        const correspondingImage = dataToShow.images?.find(image => image.id === selectedOption.id);
        // If the current image is the one that corresponds to the selected option
        if (correspondingImage && imageSrc === correspondingImage.image) {
            return "image-with-shadow";
        }

        return "";
    };

    const IMAGES = dataToShow.images;
    const OPTIONS = dataToShow.options;

    return (
        <div className="sublevel_container">
            <div className="container_text_options">
                <div className="container">
                    <p className="text">{dataToShow.text}</p>
                    <div className="container_image">
                        {IMAGES?.map((image, index) => (
                            <img 
                                key={index}
                                src={image.image} 
                                alt="image" 
                                width={130}
                                className={getImageShadowClass(image.image)}
                            />
                        ))}
                    </div>
                </div>
                <div className="container_options">
                    {OPTIONS.map((option) => (
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
