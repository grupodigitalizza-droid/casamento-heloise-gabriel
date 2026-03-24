import { motion } from 'framer-motion'
import { Heart, Gift, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroCoupleUrl from '@/assets/hero-couple.jpg'

const floatingElements = [
  { emoji: '💐', delay: 0, x: '10%', size: 'text-3xl' },
  { emoji: '✨', delay: 0.5, x: '85%', size: 'text-2xl' },
  { emoji: '🌸', delay: 1, x: '20%', size: 'text-2xl' },
  { emoji: '💫', delay: 1.5, x: '75%', size: 'text-xl' },
  { emoji: '🌿', delay: 0.8, x: '90%', size: 'text-2xl' },
  { emoji: '🍃', delay: 1.2, x: '5%', size: 'text-xl' },
]

export default function Index() {
  return (
    <div className="min-h-screen bg-cream flex flex-col overflow-hidden relative">

      {/* Floating background elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute top-[15%] ${el.size} pointer-events-none select-none z-0`}
          style={{ left: el.x }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4 + i * 0.5, delay: el.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {el.emoji}
        </motion.div>
      ))}

      {/* Top ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="pt-10 text-center"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted">
          Com todo nosso amor ✦ 2026
        </p>
      </motion.div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 relative z-10">

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-charcoal leading-tight">
            Heloise
          </h1>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="my-3"
          >
            <Heart className="w-8 h-8 mx-auto text-terracotta fill-terracotta" />
          </motion.div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-charcoal leading-tight">
            Gabriel
          </h1>
        </motion.div>

        {/* Illustrated hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="relative mb-8"
        >
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-champagne scale-110 animate-pulse-soft" />
          <div className="absolute inset-0 rounded-full border border-gold/30 scale-125" />

          <img
            src={heroCoupleUrl}
            alt="Heloise, Gabriel e Mike"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
          />

          {/* Mike badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4, type: 'spring' }}
            className="absolute -bottom-2 -right-2 bg-white rounded-full px-3 py-1.5 shadow-lg border border-champagne text-sm font-body font-bold text-charcoal z-20"
          >
            🐶 + Mike
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mb-10 max-w-sm"
        >
          <div className="divider-ornament mb-4">
            <span className="text-xs font-body tracking-widest uppercase text-muted/70 px-3">
              Lista de Casamento
            </span>
          </div>
          <p className="text-muted font-body text-base leading-relaxed">
            Escolha um presente com amor — ou com humor.
            <br />
            Cada item tem uma história nossa.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <Link to="/lista" className="btn-primary text-lg px-10 py-4">
            <Gift className="w-5 h-5" />
            Ver nossa lista de presentes
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-xs text-muted/60 font-body flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3" />
            32 presentes especiais esperando por você
          </motion.p>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="py-6 text-center"
      >
        <p className="text-xs text-muted/50 font-body">
          Feito com <Heart className="w-3 h-3 inline text-terracotta fill-terracotta" /> por Heloise, Gabriel & Mike
        </p>
      </motion.footer>
    </div>
  )
}
