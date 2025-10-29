import { ShoppingBag, X } from "lucide-react"
import { useShoppingCartStore } from "../../../stores/ShoppingCard.store"
import { CardItem } from "../shoppingCart/CardItem"
import { CartEmpty } from "../shoppingCart/CartEmpty"
import { Overlay } from "../shoppingCart/Overlay"
import { formatCurrency } from "../../../helpers"
export const ShoppinCart = () => {
    const totalProducts = useShoppingCartStore(state => state.totalProducts)
    const totalPrice = useShoppingCartStore(state => state.totalPrice)
    const cartItems = useShoppingCartStore(state => state.cartItems)
    const clearCart = useShoppingCartStore(state => state.clearCart)
    const updateIsCartOpen = useShoppingCartStore(state => state.updateIsCartOpen)
    return (
        <main className="w-full h-screen fixed z-20">
            <Overlay />
            <section className="absolute z-30 bg-white w-full h-full right-0 flex flex-col md:w-96 ">
                <section className="flex justify-between items-center border-1 border-white border-b-gray-200 py-5 px-4  ">
                    <section className="flex gap-2 items-center">
                        <ShoppingBag size={20} />
                        <p>Tu carrito</p>
                        <div className="bg-black rounded-full w-4 h-4 flex items-center justify-center">
                            <p className="text-white text-[10px]">{totalProducts}</p>
                        </div>
                    </section>
                    <X size={15} onClick={() => updateIsCartOpen()} />
                </section>
                 {totalProducts > 0 ? <section className="flex-1 overflow-y-auto px-4">
                    {
                        cartItems.map(cartItem => (<CardItem cartItem={cartItem} />))
                    }
                </section>: <section className=" w-full h-full flex items-center justify-center"><CartEmpty/></section> }
                 {totalProducts > 0 && <section className="flex flex-col px-4 gap-2 mb-4">
                    <div className="flex justify-between">
                        <p className="font-bold">Total</p>
                        <p className="font-bold">{formatCurrency(totalPrice,'en-US','USD')}</p>
                    </div>
                    <button className="bg-black text-white py-2 rounded-md">Proceder al pago</button>
                    <button
                        className="bg-white border-1 border-gray-300 py-2 rounded-md font-800 text-black font-800"
                        onClick={() => clearCart()}
                    >Vaciar carrito</button>
                </section>}
            </section>
        </main>
    )
}
