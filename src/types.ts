export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
    cartItems: CartItem[];
    totalProducts: number;
    totalPrice: number;
    isCartOpen: boolean;
    addProduct: (product: CartItem) => void;
    clearCart: () => void,
    updateTotalProducts: () => void;
    updateTotalPrice: () => void;
    updateIsCartOpen: () => void;
    removeCartItem: (id:number) => void,
    reduceCartItemQuantity: (id:number) => void
}

export type Category = "electronics" | "jewelery" | "men's clothing" | "women's clothing"

export interface Rating {
    rate: number;
    count: number;
}