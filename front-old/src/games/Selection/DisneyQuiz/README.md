# Disney Quiz

Un juego de selección múltiple sobre películas de Disney que sigue la misma estructura que los otros juegos de selección.

## Estructura del Juego

### Niveles

**✨ Nivel 1 - Fácil (5 preguntas)**
- Preguntas básicas sobre personajes famosos de Disney
- Identificación de personajes principales
- Conocimiento general de películas clásicas

**🌟 Nivel 2 - Medio (5 preguntas)**
- Preguntas sobre detalles específicos de películas
- Frases famosas y características de personajes
- Conocimiento intermedio de Disney

**🏆 Nivel 3 - Difícil (5 preguntas)**
- Preguntas avanzadas sobre películas modernas
- Detalles específicos y personajes secundarios
- Conocimiento profundo de Disney

## Estructura de Archivos

```
DisneyQuiz/
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

### Nivel 1 - Fácil
- `Olaf.png` - Muñeco de nieve de Frozen
- `Simba.png` - León de El Rey León
- `TinkerBell.png` - Hada de Peter Pan
- `Nemo.png` - Pez payaso de Buscando a Nemo
- `Aladdin.png` - Protagonista de Aladdín

### Nivel 2 - Medio
- `Cinderella.png` - Cenicienta
- `BuzzLightyear.png` - Personaje de Toy Story
- `Flounder.png` - Pez amigo de Ariel
- `Maui.png` - Semidiós de Moana
- `Rapunzel.png` - Princesa de Enredados

### Nivel 3 - Difícil
- `JudyHopps.png` - Policía de Zootopia
- `Maurice.png` - Padre de Bella
- `Anger.png` - Emoción de Intensamente
- `Miguel.png` - Protagonista de Coco
- `Baymax.png` - Robot de Big Hero 6

## Características

- **Temática Disney**: Colores rosa (magia), dorado (princesas) y púrpura (fantasía)
- **15 preguntas en total**: 5 por nivel
- **Sistema de puntuación**: +100 puntos por respuesta correcta, -50 por incorrecta
- **Animaciones**: Efectos visuales temáticos de Disney con magia
- **Responsive**: Adaptado para diferentes tamaños de pantalla
- **Notificaciones**: Alertas personalizadas con emoji de estrella ✨

## Preguntas del Juego

### ✨ Nivel 1 - Fácil
1. ¿Cómo se llama el muñeco de nieve en Frozen? → **Olaf**
2. ¿Qué animal es Simba en El Rey León? → **León**
3. ¿Quién es el hada en Peter Pan? → **Campanita**
4. En Buscando a Nemo, ¿qué tipo de pez es Nemo? → **Pez payaso**
5. ¿Quién tiene un amigo genio azul muy grande? → **Aladdín**

### 🌟 Nivel 2 - Medio
1. ¿De qué color es el vestido de Cenicienta en el baile? → **Azul**
2. En Toy Story, ¿quién dice: "¡Al infinito y más allá!"? → **Buzz Lightyear**
3. ¿Quién es el mejor amigo pez de Ariel? → **Flounder**
4. En Moana, ¿quién es el semidiós? → **Maui**
5. ¿Cómo se llama la princesa con el cabello mágico y largo? → **Rapunzel**

### 🏆 Nivel 3 - Difícil
1. En Zootopia, ¿qué trabajo tiene Judy Hopps? → **Policía**
2. En La Bella y la Bestia, ¿cómo se llama el padre de Bella? → **Maurice**
3. En Intensamente (Inside Out), ¿quién es la emoción roja? → **Furia**
4. ¿Cómo se llama el niño de Coco que ama la música? → **Miguel**
5. En Grandes Héroes (Big Hero 6), ¿quién es el robot blanco grande? → **Baymax**

## Uso

```tsx
import DisneyQuiz from './games/Selection/DisneyQuiz';

// En tu componente
<DisneyQuiz />
```

## Personalización

Para agregar más preguntas o modificar las existentes, edita el archivo `components/Data/index.ts` y sigue la estructura de datos existente.

Para cambiar los estilos, modifica el archivo `styles.scss` manteniendo la estructura de clases CSS.

## Objetivo del Juego

Este juego está diseñado para:
- Probar el conocimiento sobre películas de Disney
- Divertir a los fanáticos de Disney
- Enseñar sobre personajes y películas clásicas y modernas
- Crear una experiencia mágica e interactiva
- Fomentar el amor por las historias de Disney

## Películas Incluidas

- Frozen
- El Rey León
- Peter Pan
- Buscando a Nemo
- Aladdín
- Cenicienta
- Toy Story
- La Sirenita
- Moana
- Enredados
- Zootopia
- La Bella y la Bestia
- Intensamente (Inside Out)
- Coco
- Big Hero 6
