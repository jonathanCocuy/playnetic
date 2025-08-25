import { imagesLevel1 } from "./Images";

export const informationData = (data: string) => {
    const levels = {
        level1: [
            {
                id: 1,
                title: "¿Cuál de estos animales es un mamífero?",
                text: "Selecciona el animal que pertenece a la clase de los mamíferos.",
                answer: "Perro",
                images: [
                    { id: 1, image: imagesLevel1.Dog },
                    { id: 2, image: imagesLevel1.Chicken },
                    { id: 3, image: imagesLevel1.Turtle },
                ],
                options: [
                    { id: 1, content: "Perro" },
                    { id: 2, content: "Gallina" },
                    { id: 3, content: "Tortuga" },
                ],
            },
            {
                id: 2,
                title: "¿Cuál animal vive en el agua?",
                text: "Identifica el animal que habita principalmente en el agua.",
                answer: "Pez",
                images: [
                    { id: 1, image: imagesLevel1.Cat },
                    { id: 2, image: imagesLevel1.Fish },
                    { id: 3, image: imagesLevel1.Rabbit },
                ],
                options: [
                    { id: 1, content: "Gato" },
                    { id: 2, content: "Pez" },
                    { id: 3, content: "Conejo" },
                ],
            },
            {
                id: 3,
                title: "¿Cuál es un animal que vive en la selva?",
                text: "Selecciona el animal que habita comúnmente en la selva.",
                answer: "Tigre",
                images: [
                    { id: 1, image: imagesLevel1.Cat },
                    { id: 2, image: imagesLevel1.Tiger },
                    { id: 3, image: imagesLevel1.Dog },
                ],
                options: [
                    { id: 1, content: "Gato" },
                    { id: 2, content: "Tigre" },
                    { id: 3, content: "Perro" },
                ],
            },
            {
                id: 4,
                title: "¿Cuál animal vuela?",
                text: "Identifica el animal que puede volar.",
                answer: "Águila",
                images: [
                    { id: 1, image: imagesLevel1.Snake },
                    { id: 2, image: imagesLevel1.Frog },
                    { id: 3, image: imagesLevel1.Eagle },
                ],
                options: [
                    { id: 1, content: "Serpiente" },
                    { id: 2, content: "Rana" },
                    { id: 3, content: "Águila" },
                ],
            },
            {
                id: 5,
                title: "¿Cuál es un animal herbívoro?",
                text: "Selecciona el animal que se alimenta principalmente de plantas.",
                answer: "Vaca",
                images: [
                    { id: 1, image: imagesLevel1.Elephant },
                    { id: 2, image: imagesLevel1.Cow },
                    { id: 3, image: imagesLevel1.Wolf },
                ],
                options: [
                    { id: 1, content: "Elefante" },
                    { id: 2, content: "Vaca" },
                    { id: 3, content: "Lobo" },
                ],
            },
        ],
        level2: [
            {
                id: 1,
                title: "¿El Sol es una estrella?",
                text: "El Sol pertenece a la categoría de estrellas.",
                answer: "Correcto",
                images: [{ id: 0, image: imagesLevel1.Sun }],
                options: [
                    { id: 1, content: "Falso" },
                    { id: 2, content: "Correcto" },
                ],
            },
            {
                id: 2,
                title: "¿Las ballenas son peces?",
                text: "Las ballenas se clasifican como peces.",
                answer: "Falso",
                images: [{ id: 0, image: imagesLevel1.Whale }],
                options: [
                    { id: 1, content: "Falso" },
                    { id: 2, content: "Correcto" },
                ],
            },
            {
                id: 3,
                title: "¿Los murciélagos pueden volar?",
                text: "Los murciélagos son los únicos mamíferos capaces de volar.",
                answer: "Correcto",
                images: [{ id: 0, image: imagesLevel1.Bat }],
                options: [
                    { id: 1, content: "Correcto" },
                    { id: 2, content: "Falso" },
                ],
            },
            {
                id: 4,
                title: "¿Las plantas producen oxígeno?",
                text: "Durante la fotosíntesis, las plantas liberan oxígeno.",
                answer: "Correcto",
                images: [{ id: 0, image: imagesLevel1.Plant }],
                options: [
                    { id: 1, content: "Falso" },
                    { id: 2, content: "Correcto" },
                ],
            },
            {
                id: 5,
                title: "¿Los pingüinos pueden volar?",
                text: "Los pingüinos pueden volar como otras aves.",
                answer: "Falso",
                images: [{ id: 0, image: imagesLevel1.Penguin }],
                options: [
                    { id: 1, content: "Correcto" },
                    { id: 2, content: "Falso" },
                ],
            },
        ],
        level3: [
            {
                id: 1,
                title: "¿Cuál es el hábitat del león?",
                text: "Selecciona el hábitat natural del león.",
                answer: "Sabana",
                images: [{ id: 1, image: imagesLevel1.Lion }],
                options: [
                    { id: 1, content: "Océano" },
                    { id: 2, content: "Sabana" },
                ],
            },
            {
                id: 2,
                title: "¿Qué come el conejo?",
                text: "Identifica la dieta principal del conejo.",
                answer: "Plantas",
                images: [{ id: 1, image: imagesLevel1.Rabbit }],
                options: [
                    { id: 1, content: "Plantas" },
                    { id: 2, content: "Carne" },
                ],
            },
            {
                id: 3,
                title: "¿Cómo se reproduce el pez?",
                text: "Selecciona el método de reproducción de los peces.",
                answer: "Poniendo huevos",
                images: [{ id: 1, image: imagesLevel1.Fish }],
                options: [
                    { id: 1, content: "Poniendo huevos" },
                    { id: 2, content: "Dando a luz" },
                ],
            },
            {
                id: 4,
                title: "¿Cuál es el sentido más desarrollado del águila?",
                text: "Identifica el sentido más agudo del águila.",
                answer: "Vista",
                images: [{ id: 1, image: imagesLevel1.Eagle }],
                options: [
                    { id: 1, content: "Olfato" },
                    { id: 2, content: "Vista" },
                ],
            },
            {
                id: 5,
                title: "¿Cómo se protege el erizo?",
                text: "Selecciona el método de defensa del erizo.",
                answer: "Con púas",
                images: [{ id: 1, image: imagesLevel1.SeaUrchin }],
                options: [
                    { id: 1, content: "Con veneno" },
                    { id: 2, content: "Con púas" },
                ],
            },
        ],
    };

    return levels[data as keyof typeof levels] || [];
};
