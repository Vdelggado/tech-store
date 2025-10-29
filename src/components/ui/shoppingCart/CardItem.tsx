import { Minus, Plus, Trash2 } from "lucide-react"
import type { CartItem } from "../../../types"
import { formatCurrency } from "../../../helpers"
import { useShoppingCartStore } from "../../../stores/ShoppingCard.store"

type CartItemProp = {
  cartItem: CartItem
}

export const CardItem = ({ cartItem }: CartItemProp) => {
  const addProduct = useShoppingCartStore(state => state.addProduct)
  const removeCartItem = useShoppingCartStore( state => state.removeCartItem)
  const reduceCartItemQuantity = useShoppingCartStore( state => state.reduceCartItemQuantity)
  return (
    <main className="flex gap-4 p-2 items-center border-1 border-gray-300 my-2 rounded-lg">
      <picture className="w-20 h-20 rounded-lg">
        <img className="w-full h-full object-contain rounded-lg" src={cartItem.product.image} alt="imagen de producto" />
      </picture>
      <section className="flex flex-col gap-2 w-3/4">
        <div className="flex gap-2 items-center">
          <h2 className="text-xs flex-1">{cartItem.product.title}</h2>
          <Trash2 size={15} onClick={() => removeCartItem(cartItem.product.id)} />
        </div>
        <div className="font-bold">
          <p>{formatCurrency(cartItem.product.price, 'en-US', 'USD')}</p>
        </div>
        <div className="flex items-center gap-4">
          <div 
          className="rounded-sm border-1 border-gray-200 p-1"
          >
            <Minus size={10} onClick={() => reduceCartItemQuantity(cartItem.product.id)} />
          </div>
          <div><p className="text-sm">{cartItem.quantity}</p></div>

          <div className="rounded-sm border-1 border-gray-200 p-1">
            <Plus size={10} onClick={() => addProduct(cartItem)} />
          </div>
        </div>
      </section>
    </main>
  )
}
