# English Adventure

Un juego de selección múltiple para aprender inglés básico que sigue la misma estructura que los otros juegos de selección.

## Estructura del Juego

### Niveles

**🟢 Nivel 1 - Very Easy (5 preguntas)**
- Palabras básicas en inglés
- Identificación de animales, colores, frutas
- Completar frases simples

**🟡 Nivel 2 - Easy (5 preguntas)**
- Frases cortas y opuestos
- Preguntas básicas y colores
- Vocabulario fundamental

**🔵 Nivel 3 - Medium (5 preguntas)**
- Gramática básica
- Días de la semana
- Traducciones simples
- Vehículos y objetos

## Estructura de Archivos

```
EnglishAdventure/
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

### Nivel 1 - Very Easy
- `Cat.png` - Gato
- `Sun.png` - Sol
- `Morning.png` - Mañana
- `Banana.png` - Plátano
- `Happy.png` - Feliz

### Nivel 2 - Easy
- `BigSmall.png` - Grande/Pequeño
- `HowAreYou.png` - "How are you?"
- `Green.png` - Color verde
- `Elephant.png` - Elefante
- `House.png` - Casa

### Nivel 3 - Medium
- `SheIsHappy.png` - "She is happy"
- `Tuesday.png` - Martes
- `Apple.png` - Manzana
- `Car.png` - Carro
- `Dog.png` - Perro

## Características

- **Temática educativa**: Colores azul (educación), amarillo (aprendizaje) y verde (éxito)
- **15 preguntas en total**: 5 por nivel
- **Sistema de puntuación**: +100 puntos por respuesta correcta, -50 por incorrecta
- **Animaciones**: Efectos visuales temáticos de educación
- **Responsive**: Adaptado para diferentes tamaños de pantalla
- **Notificaciones**: Alertas personalizadas con emoji de libro 📚

## Preguntas del Juego

### Nivel 1 - Very Easy
1. What animal is this? 🐱 → Cat
2. What color is the sun? → Yellow
3. Complete: Good ___ → Morning
4. Which one is a fruit? 🍌 → Banana
5. Complete: I am ___ (happy / chair / red) → happy

### Nivel 2 - Easy
1. What is the opposite of big? → Small
2. Complete: How ___ you? → are
3. Which one is a color? → Green
4. What animal is this? 🐘 → Elephant
5. Complete: This is my ___. (house / eat / jump) → house

### Nivel 3 - Medium
1. Choose the correct sentence: → She is happy
2. What day comes after Monday? → Tuesday
3. Complete: I like ___. (play / apple / run) → apple
4. Which one is a vehicle? → Car
5. Translate: "Perro" → → Dog

## Uso

```tsx
import EnglishAdventure from './games/Selection/EnglishAdventure';

// En tu componente
<EnglishAdventure />
```

## Personalización

Para agregar más preguntas o modificar las existentes, edita el archivo `components/Data/index.ts` y sigue la estructura de datos existente.

Para cambiar los estilos, modifica el archivo `styles.scss` manteniendo la estructura de clases CSS.

## Objetivo Educativo

Este juego está diseñado para ayudar a los estudiantes a:
- Aprender vocabulario básico en inglés
- Practicar gramática simple
- Identificar objetos y conceptos
- Completar frases básicas
- Traducir palabras simples del español al inglés
