import type { Product } from '../types';

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        const data = await response.json();
        return data as Product[];
    } catch (error) {
        throw error;
    }
};
