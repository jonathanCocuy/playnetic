# Football Quiz

Un juego de selección múltiple sobre fútbol que sigue la misma estructura que el juego "ExplorersOfTheAnimalKingdom".

## Estructura del Juego

### Niveles

**Nivel 1 - Lo básico (5 preguntas)**
- Preguntas fundamentales sobre las reglas básicas del fútbol
- Número de jugadores, reglas del balón, áreas del campo, etc.

**Nivel 2 - Conocimientos intermedios (5 preguntas)**
- Preguntas sobre jugadores famosos, equipos y ligas
- Información sobre estrellas del fútbol mundial

**Nivel 3 - Curiosidades y retos (5 preguntas)**
- Preguntas avanzadas sobre historia del fútbol
- Datos curiosos y estadísticas importantes

## Estructura de Archivos

```
FootballQuiz/
├── components/
│   ├── Data/
│   │   ├── Images.ts          # Importaciones de imágenes
│   │   └── index.ts           # Datos de preguntas por nivel
│   ├── Game/
│   │   ├── Game.tsx           # Componente principal del juego
│   │   ├── Levels.tsx         # Componentes de niveles
│   │   └── MainGameComponent.tsx # Componente principal con lógica
│   └── Images/                # Carpeta para imágenes
├── index.tsx                  # Punto de entrada del juego
├── styles.scss               # Estilos del juego
└── README.md                 # Esta documentación
```

## Imágenes Requeridas

El juego necesita las siguientes imágenes en la carpeta `components/Images/`:

### Nivel 1
- `Football.png` - Balón de fútbol
- `Players.png` - Jugadores en el campo
- `Goalkeeper.png` - Portero
- `Referee.png` - Árbitro
- `Field.png` - Campo de fútbol

### Nivel 2
- `Messi.png` - Lionel Messi
- `Ronaldo.png` - Cristiano Ronaldo
- `Chelsea.png` - Logo del Chelsea
- `Milan.png` - Logo del AC Milan
- `Penalty.png` - Punto de penal

### Nivel 3
- `WorldCup.png` - Copa del Mundo
- `Colombia.png` - Bandera de Colombia
- `RonaldoNazario.png` - Ronaldo Nazário
- `Mbappe.png` - Kylian Mbappé
- `Germany.png` - Bandera de Alemania

## Características

- **Temática de fútbol**: Colores verde (campo), dorado (trofeos) y naranja (fútbol)
- **15 preguntas en total**: 5 por nivel
- **Sistema de puntuación**: +100 puntos por respuesta correcta, -50 por incorrecta
- **Animaciones**: Efectos visuales temáticos del fútbol
- **Responsive**: Adaptado para diferentes tamaños de pantalla
- **Notificaciones**: Alertas personalizadas con emoji de fútbol ⚽

## Uso

```tsx
import FootballQuiz from './games/Selection/FootballQuiz';

// En tu componente
<FootballQuiz />
```

## Personalización

Para agregar más preguntas o modificar las existentes, edita el archivo `components/Data/index.ts` y sigue la estructura de datos existente.

Para cambiar los estilos, modifica el archivo `styles.scss` manteniendo la estructura de clases CSS.
