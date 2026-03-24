import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import heroCoupleUrl from '@/assets/hero-couple.jpg'

interface Confetti {
  id: number
  x: number
  color: string
  size: number
  duration: number
  delay: number
  emoji: string
}

const confettiEmojis = ['🌸', '✨', '💐', '🌿', '⭐', '💛', '🎊', '🎉']
const confettiColors = ['#C4714A', '#C9A84C', '#7A9E7E', '#F2D5CC', '#EDD9B0', '#9C4A72']

export default function Success() {
  const { clearCart } = useCart()
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    clearCart()
    const pieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      size: Math.random() * 16 + 12,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 2,
      emoji: confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)],
    }))
    setConfetti(pieces)
  }, [])

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 overflow-hidden relative">

      {/* Confetti */}
      {confetti.map((c) => (
        <motion.div
          key={c.id}
          className="fixed top-0 pointer-events-none z-50 select-none"
          style={{ left: `${c.x}%`, fontSize: c.size }}
          initial={{ y: -60, opacity: 1, rotate: 0 }}
          animate={{ y: '110vh', opacity: [1, 1, 0], rotate: 720 }}
          transition={{ duration: c.duration, delay: c.delay, ease: 'linear' }}
        >
          {c.emoji}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-md"
      >
        {/* Illustration */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-8 relative inline-block"
        >
          <div className="absolute inset-0 rounded-full bg-champagne/30 scale-110 blur-xl" />
          <img
            src={heroCoupleUrl}
            alt="Heloise, Gabriel e Mike"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl relative z-10 mx-auto"
          />
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Gift className="w-8 h-8 text-terracotta" />
        </motion.div>

        <h1 className="font-display text-4xl font-bold text-charcoal mb-4">
          Que presente incrível! 🎉
        </h1>

        <p className="font-body text-muted text-lg leading-relaxed mb-2">
          Seu presente foi confirmado com sucesso.
        </p>
        <p className="font-body text-muted text-base leading-relaxed mb-8">
          Heloise, Gabriel e Mike mandam um beijo enorme e muita gratidão pelo seu carinho! 🐾💛
        </p>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-champagne/50">
          <p className="font-display text-lg font-semibold text-charcoal mb-2 italic">
            "Cada presente é um pedaço do nosso sonho"
          </p>
          <p className="text-sm text-muted font-body">— Heloise & Gabriel</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/lista" className="btn-ghost">
            <Gift className="w-4 h-4" />
            Ver mais presentes
          </Link>
          <Link to="/" className="btn-primary">
            <Heart className="w-4 h-4 fill-white" />
            Voltar ao início
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
