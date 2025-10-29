import { create } from 'zustand'
import { type Cart, type CartItem } from "../types"

export const useShoppingCartStore = create<Cart>((set, get) => ({
    cartItems: [],
    totalProducts: 0,
    totalPrice: 0,
    isCartOpen: false,
    addProduct: (product: CartItem) => {
        const itemsInCart = get().cartItems
        const updateTotalProducts = get().updateTotalProducts
        const updateTotalPrice = get().updateTotalPrice
        const existProduct = itemsInCart.find(cartItem => cartItem.product.id === product.product.id)
        if (!existProduct) {
            set((state) => ({ cartItems: [...state.cartItems, product] }))

        } else {
            const newItems = itemsInCart.map(item => {
                if (item.product.id === product.product.id) {
                    item.quantity += 1
                }
                return item
            })

            set({ cartItems: newItems })
        }
        updateTotalPrice()
        updateTotalProducts()

    },
    removeCartItem: (id) => {
        const itemsInCart = get().cartItems
        const updateTotalProducts = get().updateTotalProducts
        const updateTotalPrice = get().updateTotalPrice
        const newItems = itemsInCart.filter(item => item.product.id != id)

        set({ cartItems: newItems })

        updateTotalPrice()
        updateTotalProducts()
    },
    reduceCartItemQuantity: (id) => {
        const itemsInCart = get().cartItems
        const updateTotalProducts = get().updateTotalProducts
        const updateTotalPrice = get().updateTotalPrice
        const updateQuantity = itemsInCart.map(item => {
            if (item.product.id === id) {
                item.quantity -= 1
            }

            return item
        })
        const newItems = updateQuantity.filter(item => item.quantity > 0 )
        set({ cartItems: newItems })
        updateTotalPrice()
        updateTotalProducts()
    },
    clearCart: () => set({ cartItems: [], totalProducts: 0, totalPrice: 0 }),
    updateTotalProducts: () => {
        const products = get().cartItems
        const newTotalProducts = products.reduce((acumulador, currentValue) => {
            return acumulador + currentValue.quantity
        }, 0)
        set({ totalProducts: newTotalProducts })
    },
    updateTotalPrice: () => {
        const products = get().cartItems
        const totalPrice = products.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.product.price * currentValue.quantity)
        }, 0)
        set({ totalPrice: totalPrice })
    },
    updateIsCartOpen: () => set((state) => ({ isCartOpen: state.isCartOpen ? false : true }))
})) 