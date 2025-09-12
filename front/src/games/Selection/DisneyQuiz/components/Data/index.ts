import { imagesDisney } from "./Images";

export const informationData = (data: string) => {
    const levels = {
        level1: [
            {
                id: 1,
                title: "¿Cómo se llama el muñeco de nieve en Frozen?",
                text: "Selecciona el nombre del muñeco de nieve de la película Frozen.",
                answer: "Olaf",
                images: [
                    { id: 1, image: imagesDisney.Olaf },
                    { id: 2, image: imagesDisney.Simba },
                    { id: 3, image: imagesDisney.Nemo },
                ],
                options: [
                    { id: 1, content: "Olaf" },
                    { id: 2, content: "Sven" },
                    { id: 3, content: "Kristoff" },
                ],
            },
            {
                id: 2,
                title: "¿Qué animal es Simba en El Rey León?",
                text: "Identifica qué tipo de animal es el personaje principal de El Rey León.",
                answer: "León",
                images: [
                    { id: 1, image: imagesDisney.Simba },
                    { id: 2, image: imagesDisney.Olaf },
                    { id: 3, image: imagesDisney.Aladdin },
                ],
                options: [
                    { id: 1, content: "Perro" },
                    { id: 2, content: "León" },
                    { id: 3, content: "Tigre" },
                ],
            },
            {
                id: 3,
                title: "¿Quién es el hada en Peter Pan?",
                text: "Selecciona el nombre del hada que acompaña a Peter Pan.",
                answer: "Campanita",
                images: [
                    { id: 1, image: imagesDisney.TinkerBell },
                    { id: 2, image: imagesDisney.Cinderella },
                    { id: 3, image: imagesDisney.Rapunzel },
                ],
                options: [
                    { id: 1, content: "Cenicienta" },
                    { id: 2, content: "Campanita" },
                    { id: 3, content: "Ariel" },
                ],
            },
            {
                id: 4,
                title: "En Buscando a Nemo, ¿qué tipo de pez es Nemo?",
                text: "Identifica la especie de pez que es el personaje principal de Buscando a Nemo.",
                answer: "Pez payaso",
                images: [
                    { id: 1, image: imagesDisney.Nemo },
                    { id: 2, image: imagesDisney.Flounder },
                    { id: 3, image: imagesDisney.Simba },
                ],
                options: [
                    { id: 1, content: "Tiburón" },
                    { id: 2, content: "Pez payaso" },
                    { id: 3, content: "Delfín" },
                ],
            },
            {
                id: 5,
                title: "¿Quién tiene un amigo genio azul muy grande?",
                text: "Selecciona el personaje que tiene un genio azul como amigo.",
                answer: "Aladdín",
                images: [
                    { id: 1, image: imagesDisney.Aladdin },
                    { id: 2, image: imagesDisney.Maui },
                    { id: 3, image: imagesDisney.BuzzLightyear },
                ],
                options: [
                    { id: 1, content: "Aladdín" },
                    { id: 2, content: "Hércules" },
                    { id: 3, content: "Mulán" },
                ],
            },
        ],
        level2: [
            {
                id: 1,
                title: "¿De qué color es el vestido de Cenicienta en el baile?",
                text: "Selecciona el color del famoso vestido de Cenicienta para el baile.",
                answer: "Azul",
                images: [{ id: 0, image: imagesDisney.Cinderella }],
                options: [
                    { id: 1, content: "Rosado" },
                    { id: 2, content: "Azul" },
                    { id: 3, content: "Verde" },
                ],
            },
            {
                id: 2,
                title: "En Toy Story, ¿quién dice: \"¡Al infinito y más allá!\"?",
                text: "Identifica el personaje de Toy Story que dice esta famosa frase.",
                answer: "Buzz Lightyear",
                images: [{ id: 0, image: imagesDisney.BuzzLightyear }],
                options: [
                    { id: 1, content: "Woody" },
                    { id: 2, content: "Buzz Lightyear" },
                    { id: 3, content: "Jessie" },
                ],
            },
            {
                id: 3,
                title: "¿Quién es el mejor amigo pez de Ariel?",
                text: "Selecciona el nombre del mejor amigo pez de la Sirenita.",
                answer: "Flounder",
                images: [{ id: 0, image: imagesDisney.Flounder }],
                options: [
                    { id: 1, content: "Sebastián" },
                    { id: 2, content: "Flounder" },
                    { id: 3, content: "Scuttle" },
                ],
            },
            {
                id: 4,
                title: "En Moana, ¿quién es el semidiós?",
                text: "Identifica el personaje semidiós de la película Moana.",
                answer: "Maui",
                images: [{ id: 0, image: imagesDisney.Maui }],
                options: [
                    { id: 1, content: "Maui" },
                    { id: 2, content: "Tamatoa" },
                    { id: 3, content: "Pua" },
                ],
            },
            {
                id: 5,
                title: "¿Cómo se llama la princesa con el cabello mágico y largo?",
                text: "Selecciona el nombre de la princesa conocida por su cabello mágico y muy largo.",
                answer: "Rapunzel",
                images: [{ id: 0, image: imagesDisney.Rapunzel }],
                options: [
                    { id: 1, content: "Rapunzel" },
                    { id: 2, content: "Bella" },
                    { id: 3, content: "Elsa" },
                ],
            },
        ],
        level3: [
            {
                id: 1,
                title: "En Zootopia, ¿qué trabajo tiene Judy Hopps?",
                text: "Selecciona la profesión de Judy Hopps en la película Zootopia.",
                answer: "Policía",
                images: [{ id: 1, image: imagesDisney.JudyHopps }],
                options: [
                    { id: 1, content: "Maestra" },
                    { id: 2, content: "Policía" },
                    { id: 3, content: "Doctora" },
                ],
            },
            {
                id: 2,
                title: "En La Bella y la Bestia, ¿cómo se llama el padre de Bella?",
                text: "Identifica el nombre del padre de Bella en La Bella y la Bestia.",
                answer: "Maurice",
                images: [{ id: 1, image: imagesDisney.Maurice }],
                options: [
                    { id: 1, content: "Maurice" },
                    { id: 2, content: "Gastón" },
                    { id: 3, content: "Philippe" },
                ],
            },
            {
                id: 3,
                title: "En Intensamente (Inside Out), ¿quién es la emoción roja?",
                text: "Selecciona el nombre de la emoción roja en la película Intensamente.",
                answer: "Furia",
                images: [{ id: 1, image: imagesDisney.Anger }],
                options: [
                    { id: 1, content: "Furia" },
                    { id: 2, content: "Miedo" },
                    { id: 3, content: "Desagrado" },
                ],
            },
            {
                id: 4,
                title: "¿Cómo se llama el niño de Coco que ama la música?",
                text: "Identifica el nombre del protagonista de Coco que ama la música.",
                answer: "Miguel",
                images: [{ id: 1, image: imagesDisney.Miguel }],
                options: [
                    { id: 1, content: "Miguel" },
                    { id: 2, content: "Héctor" },
                    { id: 3, content: "Ernesto" },
                ],
            },
            {
                id: 5,
                title: "En Grandes Héroes (Big Hero 6), ¿quién es el robot blanco grande?",
                text: "Selecciona el nombre del robot blanco y grande en Big Hero 6.",
                answer: "Baymax",
                images: [{ id: 1, image: imagesDisney.Baymax }],
                options: [
                    { id: 1, content: "Tadashi" },
                    { id: 2, content: "Baymax" },
                    { id: 3, content: "Hiro" },
                ],
            },
        ],
    };

    return levels[data as keyof typeof levels] || [];
};
