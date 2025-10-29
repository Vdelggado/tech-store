import { useShoppingCartStore } from "../../../stores/ShoppingCard.store"

export const Overlay = () => {
  const updateIsCartOpen= useShoppingCartStore(state => state.updateIsCartOpen)
  return (
    <main className="absolute inset-0 bg-black opacity-50 z-20" onClick={() => updateIsCartOpen() }>
    </main>
  )
}
