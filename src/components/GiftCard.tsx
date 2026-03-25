import { motion } from 'framer-motion'
import { GiftItem } from '@/data/giftItems'
import { Plus, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import GiftIllustration from '@/components/illustrations/GiftIllustrations'

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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-white/80"
      onClick={onClick}
    >
      {/* Illustrated scene */}
      <div className="aspect-square relative overflow-hidden">
        <GiftIllustration sceneId={item.scene} uid={`g${item.id}`} />

        {/* Price badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
          <span className="text-xs font-body font-bold" style={{ color: item.accentColor }}>
            R$ {item.price.toLocaleString('pt-BR')}
          </span>
        </div>

        {/* Add to cart button */}
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.88 }}
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
            inCart
              ? 'bg-terracotta text-white'
              : 'bg-white/95 text-charcoal hover:bg-terracotta hover:text-white'
          }`}
        >
          {inCart ? (
            <Heart className="w-4 h-4 fill-white" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </motion.button>

        {/* In-cart glow overlay */}
        {inCart && (
          <div className="absolute inset-0 ring-2 ring-inset ring-terracotta/30 rounded-t-2xl pointer-events-none" />
        )}
      </div>

      {/* Card body */}
      <div className="p-3 md:p-4 border-t border-gray-50">
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
