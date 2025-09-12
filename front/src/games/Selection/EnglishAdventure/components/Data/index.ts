import { imagesEnglish } from "./Images";

export const informationData = (data: string) => {
    const levels = {
        level1: [
            {
                id: 1,
                title: "What animal is this? 🐱",
                text: "Selecciona el animal que ves en la imagen.",
                answer: "Cat",
                images: [
                    { id: 1, image: imagesEnglish.Cat },
                    { id: 2, image: imagesEnglish.Dog },
                    { id: 3, image: imagesEnglish.Elephant },
                ],
                options: [
                    { id: 1, content: "Cat" },
                    { id: 2, content: "Dog" },
                    { id: 3, content: "Bird" },
                ],
            },
            {
                id: 2,
                title: "What color is the sun?",
                text: "Identifica el color del sol.",
                answer: "Yellow",
                images: [
                    { id: 1, image: imagesEnglish.Sun },
                    { id: 2, image: imagesEnglish.Green },
                    { id: 3, image: imagesEnglish.Happy },
                ],
                options: [
                    { id: 1, content: "Yellow" },
                    { id: 2, content: "Blue" },
                    { id: 3, content: "Green" },
                ],
            },
            {
                id: 3,
                title: "Complete: Good ___",
                text: "Completa la frase con la palabra correcta.",
                answer: "Morning",
                images: [
                    { id: 1, image: imagesEnglish.Morning },
                    { id: 2, image: imagesEnglish.Banana },
                    { id: 3, image: imagesEnglish.House },
                ],
                options: [
                    { id: 1, content: "Morning" },
                    { id: 2, content: "Banana" },
                    { id: 3, content: "Chair" },
                ],
            },
            {
                id: 4,
                title: "Which one is a fruit? 🍌",
                text: "Selecciona la fruta de las opciones.",
                answer: "Banana",
                images: [
                    { id: 1, image: imagesEnglish.Banana },
                    { id: 2, image: imagesEnglish.Car },
                    { id: 3, image: imagesEnglish.Cat },
                ],
                options: [
                    { id: 1, content: "Banana" },
                    { id: 2, content: "Car" },
                    { id: 3, content: "Ball" },
                ],
            },
            {
                id: 5,
                title: "Complete: I am ___ (happy / chair / red)",
                text: "Completa la frase con la palabra correcta.",
                answer: "happy",
                images: [
                    { id: 1, image: imagesEnglish.Happy },
                    { id: 2, image: imagesEnglish.House },
                    { id: 3, image: imagesEnglish.Green },
                ],
                options: [
                    { id: 1, content: "happy" },
                    { id: 2, content: "chair" },
                    { id: 3, content: "red" },
                ],
            },
        ],
        level2: [
            {
                id: 1,
                title: "What is the opposite of big?",
                text: "Selecciona el opuesto de la palabra 'big'.",
                answer: "Small",
                images: [{ id: 0, image: imagesEnglish.BigSmall }],
                options: [
                    { id: 1, content: "Small" },
                    { id: 2, content: "Tall" },
                    { id: 3, content: "Blue" },
                ],
            },
            {
                id: 2,
                title: "Complete: How ___ you?",
                text: "Completa la pregunta con la palabra correcta.",
                answer: "are",
                images: [{ id: 0, image: imagesEnglish.HowAreYou }],
                options: [
                    { id: 1, content: "is" },
                    { id: 2, content: "are" },
                    { id: 3, content: "am" },
                ],
            },
            {
                id: 3,
                title: "Which one is a color?",
                text: "Selecciona la palabra que representa un color.",
                answer: "Green",
                images: [{ id: 0, image: imagesEnglish.Green }],
                options: [
                    { id: 1, content: "Table" },
                    { id: 2, content: "Green" },
                    { id: 3, content: "Dog" },
                ],
            },
            {
                id: 4,
                title: "What animal is this? 🐘",
                text: "Identifica el animal que ves en la imagen.",
                answer: "Elephant",
                images: [{ id: 0, image: imagesEnglish.Elephant }],
                options: [
                    { id: 1, content: "Elephant" },
                    { id: 2, content: "Lion" },
                    { id: 3, content: "Fish" },
                ],
            },
            {
                id: 5,
                title: "Complete: This is my ___. (house / eat / jump)",
                text: "Completa la frase con la palabra correcta.",
                answer: "house",
                images: [{ id: 0, image: imagesEnglish.House }],
                options: [
                    { id: 1, content: "house" },
                    { id: 2, content: "eat" },
                    { id: 3, content: "jump" },
                ],
            },
        ],
        level3: [
            {
                id: 1,
                title: "Choose the correct sentence:",
                text: "Selecciona la oración gramaticalmente correcta.",
                answer: "She is happy",
                images: [{ id: 1, image: imagesEnglish.SheIsHappy }],
                options: [
                    { id: 1, content: "She am happy" },
                    { id: 2, content: "She is happy" },
                    { id: 3, content: "She are happy" },
                ],
            },
            {
                id: 2,
                title: "What day comes after Monday?",
                text: "Selecciona el día que viene después del lunes.",
                answer: "Tuesday",
                images: [{ id: 1, image: imagesEnglish.Tuesday }],
                options: [
                    { id: 1, content: "Friday" },
                    { id: 2, content: "Tuesday" },
                    { id: 3, content: "Sunday" },
                ],
            },
            {
                id: 3,
                title: "Complete: I like ___. (play / apple / run)",
                text: "Completa la frase con la palabra correcta.",
                answer: "apple",
                images: [{ id: 1, image: imagesEnglish.Apple }],
                options: [
                    { id: 1, content: "play" },
                    { id: 2, content: "apple" },
                    { id: 3, content: "run" },
                ],
            },
            {
                id: 4,
                title: "Which one is a vehicle?",
                text: "Selecciona el vehículo de las opciones.",
                answer: "Car",
                images: [{ id: 1, image: imagesEnglish.Car }],
                options: [
                    { id: 1, content: "Car" },
                    { id: 2, content: "Cat" },
                    { id: 3, content: "Tree" },
                ],
            },
            {
                id: 5,
                title: "Translate: \"Perro\" →",
                text: "Traduce la palabra 'Perro' al inglés.",
                answer: "Dog",
                images: [{ id: 1, image: imagesEnglish.Dog }],
                options: [
                    { id: 1, content: "Cat" },
                    { id: 2, content: "Dog" },
                    { id: 3, content: "Bird" },
                ],
            },
        ],
    };

    return levels[data as keyof typeof levels] || [];
};
