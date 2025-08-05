export const informationData = (data: string) => {
    const levels = {
        level1: [
            {
                id: 1,
                title: "¿Cuál de estos animales es un mamífero?",
                text: "Selecciona el animal que pertenece a la clase de los mamíferos.",
                answer: "Perro",
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
                options: [
                    { id: 1, content: "Gato" },
                    { id: 2, content: "Ave" },
                    { id: 3, content: "Pez" },
                    { id: 4, content: "Conejo" },
                ],
            },
            {
                id: 3,
                title: "¿Cuál es un animal doméstico?",
                text: "Selecciona el animal que comúnmente vive con los humanos.",
                answer: "Gato",
                options: [
                    { id: 1, content: "León" },
                    { id: 2, content: "Tigre" },
                    { id: 3, content: "Gato" },
                    { id: 4, content: "Lobo" },
                ],
            },
            {
                id: 4,
                title: "¿Cuál animal vuela?",
                text: "Identifica el animal que puede volar.",
                answer: "Águila",
                options: [
                    { id: 1, content: "Serpiente" },
                    { id: 2, content: "Rana" },
                    { id: 3, content: "Águila" },
                    { id: 4, content: "Tortuga" },
                ],
            },
            {
                id: 5,
                title: "¿Cuál es un animal herbívoro?",
                text: "Selecciona el animal que se alimenta principalmente de plantas.",
                answer: "Vaca",
                options: [
                    { id: 1, content: "León" },
                    { id: 2, content: "Tigre" },
                    { id: 3, content: "Vaca" },
                    { id: 4, content: "Lobo" },
                ],
            },
        ],
        level2: [
            {
                id: 1,
                title: "¿Los mamíferos amamantan a sus crías?",
                text: "Verdadero o falso: Los mamíferos alimentan a sus crías con leche.",
                answer: "correct",
                options: [
                    { id: 1, content: "false" },
                    { id: 2, content: "correct" },
                ],
            },
            {
                id: 2,
                title: "¿Los peces respiran bajo el agua?",
                text: "Verdadero o falso: Los peces pueden respirar oxígeno del agua.",
                answer: "correct",
                options: [
                    { id: 1, content: "false" },
                    { id: 2, content: "correct" },
                ],
            },
            {
                id: 3,
                title: "¿Las aves tienen plumas?",
                text: "Verdadero o falso: Todas las aves están cubiertas de plumas.",
                answer: "correct",
                options: [
                    { id: 1, content: "correct" },
                    { id: 2, content: "false" },
                ],
            },
            {
                id: 4,
                title: "¿Los reptiles son de sangre fría?",
                text: "Verdadero o falso: Los reptiles regulan su temperatura corporal.",
                answer: "correct",
                options: [
                    { id: 1, content: "false" },
                    { id: 2, content: "correct" },
                ],
            },
            {
                id: 5,
                title: "¿Los anfibios viven en tierra y agua?",
                text: "Verdadero o falso: Los anfibios pueden vivir en ambos medios.",
                answer: "correct",
                options: [
                    { id: 1, content: "correct" },
                    { id: 2, content: "false" },
                ],
            },
        ],
        level3: [
            {
                id: 1,
                title: "¿Cuál es el hábitat del león?",
                text: "Selecciona el hábitat natural del león.",
                answer: "Sabana",
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
                options: [
                    { id: 1, content: "Con veneno" },
                    { id: 2, content: "Con púas" },
                ],
            },
        ],
    };

    return levels[data as keyof typeof levels] || [];
};
