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
    }
];