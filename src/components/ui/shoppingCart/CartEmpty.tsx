import { ShoppingBag } from "lucide-react"
export const CartEmpty = () => {
  return (
    <main className="flex flex-col items-center gap-2">
        <ShoppingBag size={100}/>
        <p className="font-bold">Tu carrito esta vacio</p>
        <p className="text-gray-500">Agrega productos para comenzar</p>
    </main>
  )
}
