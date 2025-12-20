import GridMotion from '../effects/GridMotion';

// note: you'll need to make sure the parent container of this component is sized properly
export const GridMotionBackground = () => {
    const items = [
    'https://picsum.photos/300',
    'https://picsum.photos/400',
    'https://picsum.photos/500',
    'https://picsum.photos/600',
    'https://picsum.photos/700',
    'https://picsum.photos/800',
    'https://picsum.photos/900',
    'https://picsum.photos/1000',
    'https://picsum.photos/1100',
    'https://picsum.photos/1200',
    'https://picsum.photos/1300',
    'https://picsum.photos/1400',
    'https://picsum.photos/1500',
    'https://picsum.photos/1600',
    'https://picsum.photos/1700',
    'https://picsum.photos/1800',
    'https://picsum.photos/1900',
    'https://picsum.photos/2000',
    'https://picsum.photos/2100',
    'https://picsum.photos/2200',
    'https://picsum.photos/2300',
    'https://picsum.photos/2400',
    'https://picsum.photos/2500',
    'https://picsum.photos/2600',
    'https://picsum.photos/2700',
    'https://picsum.photos/2800',
    'https://picsum.photos/2900',
    'https://picsum.photos/3000',
];
    return (
        <GridMotion items={items} />
    );
}