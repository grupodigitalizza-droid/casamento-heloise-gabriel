import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { giftItems, GiftItem } from '@/data/giftItems'
import GiftCard from '@/components/GiftCard'
import GiftDetailModal from '@/components/GiftDetailModal'
import CartDrawer from '@/components/CartDrawer'
import CartButton from '@/components/CartButton'
import { ArrowLeft, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function GiftList() {
  const [selectedItem, setSelectedItem] = useState<GiftItem | null>(null)

  return (
    <div className="min-h-screen bg-cream">

      {/* Header */}
      <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-champagne/50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted hover:text-charcoal transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-body text-sm">Voltar</span>
          </Link>

          <div className="text-center">
            <h1 className="font-display text-lg font-semibold text-charcoal">
              Heloise & Gabriel
            </h1>
            <p className="text-xs font-body text-muted/70 tracking-wider uppercase">
              Lista de Presentes
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-terracotta">
            <Heart className="w-4 h-4 fill-terracotta" />
            <span className="font-body text-sm font-medium">{giftItems.length} itens</span>
          </div>
        </div>
      </header>

      {/* Gift grid */}
      <section className="container max-w-6xl mx-auto px-4 py-8 pb-32">
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          <AnimatePresence>
            {giftItems.map((item, index) => (
              <GiftCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Floating cart button */}
      <CartButton />

      {/* Cart drawer */}
      <CartDrawer />

      {/* Detail modal */}
      <AnimatePresence>
        {selectedItem && (
          <GiftDetailModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
