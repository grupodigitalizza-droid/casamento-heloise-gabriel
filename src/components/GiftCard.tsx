import { motion } from 'framer-motion'
import { GiftItem } from '@/data/giftItems'
import { Plus, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'

interface GiftCardProps {
  item: GiftItem
  onClick: () => void
  index: number
}

export default function GiftCard({ item, onClick, index }: GiftCardProps) {
  const { addItem, items } = useCart()
  const inCart = items.some((i) => i.id === item.id)

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(item)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="card-illustrated group cursor-pointer bg-white"
      onClick={onClick}
    >
      {/* Illustrated image area */}
      <div className={`aspect-square bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #00000030 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Emoji */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3 + (index % 3) * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl select-none"
        >
          {item.emoji}
        </motion.div>

        {/* Price badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
          <span className="text-xs font-body font-bold" style={{ color: item.accentColor }}>
            R$ {item.price.toLocaleString('pt-BR')}
          </span>
        </div>

        {/* Add to cart button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
            inCart
              ? 'bg-terracotta text-white'
              : 'bg-white text-charcoal hover:bg-terracotta hover:text-white'
          }`}
        >
          {inCart ? (
            <Heart className="w-4 h-4 fill-white" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </motion.button>
      </div>

      {/* Card body */}
      <div className="p-3 md:p-4">
        <h3 className="font-display text-sm md:text-base font-semibold text-charcoal leading-snug line-clamp-2 mb-1.5">
          {item.title}
        </h3>
        <p className="text-xs text-muted font-body flex items-center gap-1">
          <span style={{ color: item.accentColor }}>✦</span>
          {item.emotion}
        </p>
      </div>
    </motion.div>
  )
}
