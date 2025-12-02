import { imagesLevel1 } from "./Images"

export const informationData = (data: string) => {
    const levels = {
        level1: [
            {
                id: 1,
                title: "¿Cuál es el color del fuego?",
                text: "Selecciona el color que representa el fuego.",
                answer: "Rojo",
                images: [
                    { id: 1, image: imagesLevel1.Red },
                    { id: 2, image: imagesLevel1.Blue },
                    { id: 3, image: imagesLevel1.Green },
                ],
                options: [
                    { id: 1, content: "Rojo" },
                    { id: 2, content: "Azul" },
                    { id: 3, content: "Verde" },
                ],
            },
            {
                id: 2,
                title: "¿Cuál es el color del cielo?",
                text: "Identifica el color del cielo durante el día.",
                answer: "Azul",
                images: [
                    { id: 1, image: imagesLevel1.Yellow },
                    { id: 2, image: imagesLevel1.Blue },
                    { id: 3, image: imagesLevel1.Purple },
                ],
                options: [
                    { id: 1, content: "Amarillo" },
                    { id: 2, content: "Azul" },
                    { id: 3, content: "Púrpura" },
                ],
            },
            {
                id: 3,
                title: "¿Cuál es el color de la hierba?",
                text: "Selecciona el color de la hierba y las plantas.",
                answer: "Verde",
                images: [
                    { id: 1, image: imagesLevel1.Green },
                    { id: 2, image: imagesLevel1.Yellow },
                    { id: 3, image: imagesLevel1.Blue },
                ],
                options: [
                    { id: 1, content: "Verde" },
                    { id: 2, content: "Amarillo" },
                    { id: 3, content: "Azul" },
                ],
            },
            {
                id: 4,
                title: "¿Cuál es el color del sol?",
                text: "Identifica el color del sol en el cielo.",
                answer: "Amarillo",
                images: [
                    { id: 1, image: imagesLevel1.Red },
                    { id: 2, image: imagesLevel1.Yellow },
                    { id: 3, image: imagesLevel1.Orange },
                ],
                options: [
                    { id: 1, content: "Rojo" },
                    { id: 2, content: "Amarillo" },
                    { id: 3, content: "Naranja" },
                ],
            },
            {
                id: 5,
                title: "¿Cuál es el color de las uvas?",
                text: "Selecciona el color de las uvas moradas.",
                answer: "Púrpura",
                images: [
                    { id: 1, image: imagesLevel1.Purple },
                    { id: 2, image: imagesLevel1.Red },
                    { id: 3, image: imagesLevel1.Blue },
                ],
                options: [
                    { id: 1, content: "Púrpura" },
                    { id: 2, content: "Rojo" },
                    { id: 3, content: "Azul" },
                ],
            },
        ],
        level2: [
            {
                id: 1,
                title: "¿El rojo y azul forman púrpura?",
                text: "La mezcla de rojo y azul produce púrpura.",
                answer: "Correcto",
                images: [
                    { id: 0, image: imagesLevel1.Red },
                    { id: 0, image: imagesLevel1.Blue },
                    { id: 0, image: imagesLevel1.Purple },
                ],
                options: [
                    { id: 1, content: "Falso" },
                    { id: 2, content: "Correcto" },
                ],
            },
            {
                id: 2,
                title: "¿El amarillo y azul forman verde?",
                text: "La mezcla de amarillo y azul produce verde.",
                answer: "Correcto",
                images: [
                    { id: 0, image: imagesLevel1.Yellow },
                    { id: 0, image: imagesLevel1.Blue },
                    { id: 0, image: imagesLevel1.Green },
                ],
                options: [
                    { id: 1, content: "Falso" },
                    { id: 2, content: "Correcto" },
                ],
            },
            {
                id: 3,
                title: "¿El blanco es la ausencia de color?",
                text: "El blanco representa la ausencia de todos los colores.",
                answer: "Falso",
                images: [
                    { id: 0, image: imagesLevel1.White },
                    { id: 0, image: imagesLevel1.Black },
                ],
                options: [
                    { id: 1, content: "Correcto" },
                    { id: 2, content: "Falso" },
                ],
            },
            {
                id: 4,
                title: "¿El rojo y amarillo forman naranja?",
                text: "La mezcla de rojo y amarillo produce naranja.",
                answer: "Correcto",
                images: [
                    { id: 0, image: imagesLevel1.Red },
                    { id: 0, image: imagesLevel1.Yellow },
                    { id: 0, image: imagesLevel1.Orange },
                ],
                options: [
                    { id: 1, content: "Falso" },
                    { id: 2, content: "Correcto" },
                ],
            },
            {
                id: 5,
                title: "¿El negro es la suma de todos los colores?",
                text: "El negro representa la suma de todos los colores.",
                answer: "Falso",
                images: [
                    { id: 0, image: imagesLevel1.Black },
                    { id: 0, image: imagesLevel1.White },
                ],
                options: [
                    { id: 1, content: "Correcto" },
                    { id: 2, content: "Falso" },
                ],
            },
        ],
        level3: [
            {
                id: 1,
                title: "¿Cuál es un color cálido?",
                text: "Selecciona un color que se considera cálido.",
                answer: "Rojo",
                images: [
                    { id: 1, image: imagesLevel1.Red },
                    { id: 2, image: imagesLevel1.Blue },
                ],
                options: [
                    { id: 1, content: "Rojo" },
                    { id: 2, content: "Azul" },
                ],
            },
            {
                id: 2,
                title: "¿Cuál es un color frío?",
                text: "Identifica un color que se considera frío.",
                answer: "Azul",
                images: [
                    { id: 1, image: imagesLevel1.Yellow },
                    { id: 2, image: imagesLevel1.Blue },
                ],
                options: [
                    { id: 1, content: "Amarillo" },
                    { id: 2, content: "Azul" },
                ],
            },
            {
                id: 3,
                title: "¿Cuál es un color primario?",
                text: "Selecciona un color que es primario.",
                answer: "Rojo",
                images: [
                    { id: 1, image: imagesLevel1.Red },
                    { id: 2, image: imagesLevel1.Green },
                ],
                options: [
                    { id: 1, content: "Rojo" },
                    { id: 2, content: "Verde" },
                ],
            },
            {
                id: 4,
                title: "¿Cuál es un color secundario?",
                text: "Identifica un color que es secundario.",
                answer: "Verde",
                images: [
                    { id: 1, image: imagesLevel1.Blue },
                    { id: 2, image: imagesLevel1.Green },
                ],
                options: [
                    { id: 1, content: "Azul" },
                    { id: 2, content: "Verde" },
                ],
            },
            {
                id: 5,
                title: "¿Cuál es un color neutro?",
                text: "Selecciona un color que se considera neutro.",
                answer: "Gris",
                images: [
                    { id: 1, image: imagesLevel1.Gray },
                    { id: 2, image: imagesLevel1.Purple },
                ],
                options: [
                    { id: 1, content: "Gris" },
                    { id: 2, content: "Púrpura" },
                ],
            },
        ],
    };

    return levels[data as keyof typeof levels] || [];
};
