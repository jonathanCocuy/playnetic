import { imagesFootball } from "./Images";

export const informationData = (data: string) => {
    const levels = {
        level1: [
            {
                id: 1,
                title: "¿Cuántos jugadores tiene un equipo en la cancha?",
                text: "Selecciona la cantidad correcta de jugadores que tiene un equipo en el campo de juego.",
                answer: "11",
                images: [
                    { id: 1, image: imagesFootball.Players },
                    { id: 2, image: imagesFootball.Field },
                    { id: 3, image: imagesFootball.Football },
                ],
                options: [
                    { id: 1, content: "9" },
                    { id: 2, content: "11" },
                    { id: 3, content: "12" },
                ],
            },
            {
                id: 2,
                title: "Completa: El balón no se puede tocar con la ___.",
                text: "Identifica con qué parte del cuerpo no se puede tocar el balón en el fútbol.",
                answer: "mano",
                images: [
                    { id: 1, image: imagesFootball.Football },
                    { id: 2, image: imagesFootball.Players },
                    { id: 3, image: imagesFootball.Goalkeeper },
                ],
                options: [
                    { id: 1, content: "pie" },
                    { id: 2, content: "mano" },
                    { id: 3, content: "cabeza" },
                ],
            },
            {
                id: 3,
                title: "¿Qué país ganó el Mundial 2022?",
                text: "Selecciona el país que se coronó campeón del Mundial de Fútbol 2022.",
                answer: "Argentina",
                images: [
                    { id: 1, image: imagesFootball.WorldCup },
                    { id: 2, image: imagesFootball.Football },
                    { id: 3, image: imagesFootball.Players },
                ],
                options: [
                    { id: 1, content: "Francia" },
                    { id: 2, content: "Argentina" },
                    { id: 3, content: "Brasil" },
                ],
            },
            {
                id: 4,
                title: "¿Cómo se llama el área donde ataja el portero?",
                text: "Identifica el nombre del área donde el portero puede tocar el balón con las manos.",
                answer: "Área grande",
                images: [
                    { id: 1, image: imagesFootball.Goalkeeper },
                    { id: 2, image: imagesFootball.Field },
                    { id: 3, image: imagesFootball.Football },
                ],
                options: [
                    { id: 1, content: "Área chica" },
                    { id: 2, content: "Área grande" },
                    { id: 3, content: "Media luna" },
                ],
            },
            {
                id: 5,
                title: "Completa: El árbitro muestra una ___ para sancionar una falta grave.",
                text: "Selecciona el objeto que usa el árbitro para sancionar faltas graves en el fútbol.",
                answer: "tarjeta roja",
                images: [
                    { id: 1, image: imagesFootball.Referee },
                    { id: 2, image: imagesFootball.Football },
                    { id: 3, image: imagesFootball.Players },
                ],
                options: [
                    { id: 1, content: "tarjeta amarilla" },
                    { id: 2, content: "tarjeta roja" },
                    { id: 3, content: "tarjeta verde" },
                ],
            },
        ],
        level2: [
            {
                id: 1,
                title: "¿En qué país nació Lionel Messi?",
                text: "Selecciona el país de nacimiento del famoso jugador Lionel Messi.",
                answer: "Argentina",
                images: [{ id: 0, image: imagesFootball.Messi }],
                options: [
                    { id: 1, content: "España" },
                    { id: 2, content: "Argentina" },
                    { id: 3, content: "Uruguay" },
                ],
            },
            {
                id: 2,
                title: "Completa: Cristiano Ronaldo juega con el número ___.",
                text: "Identifica el número que usa Cristiano Ronaldo en su camiseta.",
                answer: "7",
                images: [{ id: 0, image: imagesFootball.Ronaldo }],
                options: [
                    { id: 1, content: "10" },
                    { id: 2, content: "7" },
                    { id: 3, content: "9" },
                ],
            },
            {
                id: 3,
                title: "¿Cuál de estos equipos es inglés?",
                text: "Selecciona el equipo que pertenece a la liga inglesa.",
                answer: "Chelsea",
                images: [{ id: 0, image: imagesFootball.Chelsea }],
                options: [
                    { id: 1, content: "Real Madrid" },
                    { id: 2, content: "Chelsea" },
                    { id: 3, content: "Juventus" },
                ],
            },
            {
                id: 4,
                title: "Selecciona dos respuestas correctas: Equipos italianos.",
                text: "Identifica los equipos que pertenecen a la liga italiana.",
                answer: "AC Milan",
                images: [{ id: 0, image: imagesFootball.Milan }],
                options: [
                    { id: 1, content: "AC Milan" },
                    { id: 2, content: "Inter de Milán" },
                    { id: 3, content: "PSG" },
                ],
            },
            {
                id: 5,
                title: "Completa: En un penal, el balón se coloca en el punto del ___.",
                text: "Selecciona el nombre del punto donde se coloca el balón para ejecutar un penal.",
                answer: "penalti",
                images: [{ id: 0, image: imagesFootball.Penalty }],
                options: [
                    { id: 1, content: "gol" },
                    { id: 2, content: "penalti" },
                    { id: 3, content: "corner" },
                ],
            },
        ],
        level3: [
            {
                id: 1,
                title: "¿Qué país tiene más Copas del Mundo?",
                text: "Selecciona el país que ha ganado más Copas del Mundo de fútbol.",
                answer: "Brasil",
                images: [{ id: 1, image: imagesFootball.WorldCup }],
                options: [
                    { id: 1, content: "Alemania" },
                    { id: 2, content: "Brasil" },
                    { id: 3, content: "Italia" },
                ],
            },
            {
                id: 2,
                title: "Completa: El apodo de la selección de Colombia es ___ de oro.",
                text: "Identifica el apodo completo de la selección nacional de Colombia.",
                answer: "Tricolor",
                images: [{ id: 1, image: imagesFootball.Colombia }],
                options: [
                    { id: 1, content: "Tricolor" },
                    { id: 2, content: "Cafetero" },
                    { id: 3, content: "Dorado" },
                ],
            },
            {
                id: 3,
                title: "¿Qué jugador es apodado El Fenómeno?",
                text: "Selecciona el jugador que es conocido con el apodo de 'El Fenómeno'.",
                answer: "Ronaldo Nazário",
                images: [{ id: 1, image: imagesFootball.RonaldoNazario }],
                options: [
                    { id: 1, content: "Maradona" },
                    { id: 2, content: "Ronaldo Nazário" },
                    { id: 3, content: "Ronaldinho" },
                ],
            },
            {
                id: 4,
                title: "Selecciona dos respuestas correctas: Estrellas francesas.",
                text: "Identifica los jugadores que son de nacionalidad francesa.",
                answer: "Mbappé",
                images: [{ id: 1, image: imagesFootball.Mbappe }],
                options: [
                    { id: 1, content: "Mbappé" },
                    { id: 2, content: "Griezmann" },
                    { id: 3, content: "Modrić" },
                ],
            },
            {
                id: 5,
                title: "Completa: La final del Mundial 2014 fue entre Alemania y ___.",
                text: "Selecciona el país que jugó la final del Mundial 2014 contra Alemania.",
                answer: "Argentina",
                images: [{ id: 1, image: imagesFootball.Germany }],
                options: [
                    { id: 1, content: "Brasil" },
                    { id: 2, content: "Argentina" },
                    { id: 3, content: "España" },
                ],
            },
        ],
    };

    return levels[data as keyof typeof levels] || [];
};
