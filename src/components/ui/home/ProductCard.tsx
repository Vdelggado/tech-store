import { formatCurrency } from "../../../helpers/index.ts"
import { useShoppingCartStore } from "../../../stores/ShoppingCard.store.ts"
import type { Product } from "../../../types.ts"

type ProductProps = {
    product: Product
}
export const ProductCard = ({ product }: ProductProps) => {
    const addProduct = useShoppingCartStore((state) => state.addProduct)
    const handleAddProduct = (product: Product) => {
        const newCartItem = { product, quantity: 1 }
        addProduct(newCartItem)
    }
    return (
        <section className="w-full flex flex-col shadow-lg bg-white rounded-md">
            <picture className="w-full h-86 aspect-square">
                <img className="w-full h-full object-contain" src={product.image} alt="imagen de producto" />
            </picture>
            <section className="mx-4 flex-1">
                <section>
                    <h2 className="font-bold">{product.title}</h2>
                    <p className="text-sm text-gray-600 truncate">{product.description}</p>
                </section>
                <section >
                    <p className="text-md font-bold">{formatCurrency(product.price, 'en-US', 'USD')}</p>
                </section>
            </section>
            <section className="px-4 w-full py-8">
                <button className="w-full bg-black text-white py-2 rounded-sm hover:opacity-75" onClick={() => handleAddProduct(product)}>
                    + Agregar al carrito
                </button>
            </section>
        </section>
    )
}
