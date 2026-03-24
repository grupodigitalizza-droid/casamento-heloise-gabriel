import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartButton() {
  const { itemCount, openCart } = useCart()

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      onClick={openCart}
      className="fixed bottom-6 right-6 z-40 bg-terracotta text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl shadow-terracotta/30 hover:bg-terracotta/90 transition-colors"
    >
      <ShoppingBag className="w-6 h-6" />

      <AnimatePresence>
        {itemCount > 0 && (
          <motion.span
            key={itemCount}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="absolute -top-1.5 -right-1.5 bg-gold text-white text-xs font-body font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-sm"
          >
            {itemCount > 9 ? '9+' : itemCount}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
