import { useEffect, useState } from 'react'
import { Header } from './components/ui/home/Header'
import { ProductCard } from './components/ui/home/ProductCard'
import type { Product } from './types'
import { useShoppingCartStore } from './stores/ShoppingCard.store'
import { ShoppinCart } from './components/ui/home/ShoppinCart'
import { getProducts } from './services/productService'
function App() {
  const [products, setproducts] = useState<Product[]>([])
  const isCartOpen = useShoppingCartStore(state => state.isCartOpen)

  useEffect(() => {
    getProducts().then(products => setproducts(products))
  }, [])

  return (
    <main className={`relative`} >

      {
        isCartOpen && <ShoppinCart />
      }
      <Header />
      <h1 className='mb-20 mx-4 text-2xl font-bold text-center'>Descubre los mejores productos al mejor precio</h1>
      <section className={`px-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}>
        {
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </section>
    </main>

  )
}

export default App
