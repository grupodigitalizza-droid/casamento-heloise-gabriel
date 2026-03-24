import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, Minus, Plus, ShoppingBag, Heart, Loader2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCheckout = async () => {
    if (items.length === 0) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
            emoji: item.emoji,
          })),
        }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Erro ao criar sessão')
      if (data.url) window.location.href = data.url
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro inesperado. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-champagne/60">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-terracotta" />
                <h2 className="font-display text-xl font-bold text-charcoal">
                  Seu carrinho
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-muted/60 hover:text-terracotta transition-colors font-body flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    Limpar
                  </button>
                )}
                <button
                  onClick={closeCart}
                  className="w-8 h-8 rounded-full bg-champagne/30 flex items-center justify-center hover:bg-champagne/60 transition-colors ml-2"
                >
                  <X className="w-4 h-4 text-charcoal" />
                </button>
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              <AnimatePresence>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-16"
                  >
                    <div className="text-5xl mb-4">🎁</div>
                    <p className="font-display text-lg text-charcoal/60 mb-1">
                      Carrinho vazio
                    </p>
                    <p className="font-body text-sm text-muted">
                      Adicione presentes para a gente! 💛
                    </p>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-champagne/30"
                    >
                      {/* Emoji thumbnail */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                        {item.emoji}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-body text-sm font-semibold text-charcoal leading-snug line-clamp-2 mb-1">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm font-bold" style={{ color: item.accentColor }}>
                          R$ {(item.price * item.quantity).toLocaleString('pt-BR')}
                        </p>
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-champagne/40 flex items-center justify-center hover:bg-champagne transition-colors"
                        >
                          {item.quantity === 1 ? (
                            <Trash2 className="w-3 h-3 text-charcoal/60" />
                          ) : (
                            <Minus className="w-3 h-3 text-charcoal" />
                          )}
                        </motion.button>

                        <span className="font-body font-bold text-charcoal text-sm w-5 text-center">
                          {item.quantity}
                        </span>

                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: item.accentColor }}
                        >
                          <Plus className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-champagne/60 space-y-4 bg-cream">
                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="font-body text-muted text-sm">Total do presente</span>
                  <span className="font-display text-2xl font-bold text-charcoal">
                    R$ {total.toLocaleString('pt-BR')}
                  </span>
                </div>

                {/* Error */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-500 font-body text-center"
                  >
                    {error}
                  </motion.p>
                )}

                {/* Checkout button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCheckout}
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5 fill-white" />
                      Presentear agora ✦ R$ {total.toLocaleString('pt-BR')}
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-muted/50 text-center font-body">
                  Pagamento 100% seguro via Stripe 🔒
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
