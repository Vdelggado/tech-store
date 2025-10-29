import { ShoppingCart } from 'lucide-react'
import { useShoppingCartStore } from '../../../stores/ShoppingCard.store'
export const Header = () => {
  const totalProducts = useShoppingCartStore((state) => state.totalProducts)
  const updateIsCartOpen = useShoppingCartStore(state => state.updateIsCartOpen)
  return (
    <main 
    className='fixed w-full flex justify-between p-4 border-1 border-white border-b-gray-200 bg-white'
    >
      <section className='flex gap-2 items-center'>
        <section className='bg-black p-2 rounded-sm'>
          <ShoppingCart size={20} color='#FFFFFF' />
        </section>
        <p className='font-semibold'>TechStore</p>
      </section>
      <section
       className='relative flex gap-4 items-center py-1 px-4 rounded-sm border-2 border-gray-200 shadow-xs'
       onClick={ () => updateIsCartOpen()}
       >
        <ShoppingCart size={20} />
        <p className='font-semibold'>Carrito</p>
        {
          totalProducts > 0 && (
            <div className='absolute -top-2 right-1 bg-black rounded-full w-4 h-4 flex items-center justify-center'>
              <p className='text-white text-[10px]'>{totalProducts}</p>
            </div>
          )
        }
      </section>
    </main>
  )
}
