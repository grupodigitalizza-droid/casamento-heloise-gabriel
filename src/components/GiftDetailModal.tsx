import { motion, AnimatePresence } from 'framer-motion'
import { GiftItem } from '@/data/giftItems'
import { X, Heart, ShoppingBag, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { itemImages } from '@/data/itemImages'

interface Props {
  item: GiftItem
  onClose: () => void
}

export default function GiftDetailModal({ item, onClose }: Props) {
  const { addItem, removeItem, updateQuantity, items, openCart } = useCart()
  const cartItem = items.find((i) => i.id === item.id)
  const qty = cartItem?.quantity ?? 0

  const handleAdd = () => addItem(item)
  const handleDecrease = () => {
    if (qty === 1) removeItem(item.id)
    else updateQuantity(item.id, qty - 1)
  }

  const handleGoToCart = () => {
    onClose()
    setTimeout(() => openCart(), 100)
  }

  const illustration = itemImages[item.id]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="bg-cream rounded-3xl max-w-md w-full overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`aspect-[4/3] relative overflow-hidden ${!illustration ? `bg-gradient-to-br ${item.gradient}` : ''}`}>
          {illustration ? (
            <img
              src={illustration}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #00000030 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-9xl select-none">
                {item.emoji}
              </div>
            </>
          )}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-sm"
          >
            <X className="w-4 h-4 text-charcoal" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Title & emotion */}
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal leading-snug mb-2">
              {item.title}
            </h2>
            <span className="inline-flex items-center gap-1.5 text-sm font-body px-3 py-1 rounded-full bg-champagne/50 text-charcoal/70">
              <Heart className="w-3 h-3" style={{ color: item.accentColor }} />
              {item.emotion}
            </span>
          </div>

          {/* Description */}
          <p className="font-body text-muted leading-relaxed italic text-base">
            "{item.description}"
          </p>

          {/* Divider */}
          <div className="h-px bg-champagne/60" />

          {/* Price & actions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-3xl font-bold" style={{ color: item.accentColor }}>
                R$ {item.price.toLocaleString('pt-BR')}
              </span>

              {qty > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={handleGoToCart}
                  className="text-sm font-body text-terracotta underline underline-offset-2 hover:text-terracotta/70 transition-colors"
                >
                  Ver carrinho →
                </motion.button>
              )}
            </div>

            {qty === 0 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAdd}
                className="btn-primary w-full justify-center"
              >
                <ShoppingBag className="w-5 h-5" />
                Adicionar ao carrinho
              </motion.button>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-champagne/50 flex-1 justify-between">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDecrease}
                    className="w-8 h-8 rounded-full bg-champagne/40 flex items-center justify-center hover:bg-champagne transition-colors"
                  >
                    <Minus className="w-3 h-3 text-charcoal" />
                  </motion.button>
                  <span className="font-body font-bold text-charcoal text-lg min-w-[2ch] text-center">
                    {qty}
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleAdd}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: item.accentColor }}
                  >
                    <Plus className="w-3 h-3" />
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleGoToCart}
                  className="btn-primary py-2.5 px-5"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Finalizar
                </motion.button>
              </div>
            )}
          </div>

          <p className="text-xs text-muted/60 text-center font-body">
            Pagamento seguro via Stripe 🔒
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
