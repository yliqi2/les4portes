export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    image?: string;
}
export const Entrantes: Product[] = [
    {
        id: 1,
        name: 'Bravas',
        description: 'Bravas con salsa casera.',
        price: 4.95,
        image: 'bravas.jpg',

    },
    {
        id: 2,
        name: 'Patatas Fritas',
        description: 'Patatas fritas caseras.',
        price: 4.95,
        // image: 'patatas-fritas.jpg',
    },
    {
        id: 3,
        name: 'Calameres Romana',
        description: 'Calamares a la romana.',
        price: 4.95,
        // image: 'calameres-romana.jpg',
    }
    
];