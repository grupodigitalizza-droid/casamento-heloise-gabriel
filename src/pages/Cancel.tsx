import { motion } from 'framer-motion'
import { Heart, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Cancel() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-6xl mb-6"
        >
          😢
        </motion.div>

        <h1 className="font-display text-3xl font-bold text-charcoal mb-4">
          Pagamento cancelado
        </h1>

        <p className="font-body text-muted text-base leading-relaxed mb-8">
          Tudo bem! Os itens continuam no seu carrinho.
          <br />
          Pode voltar quando quiser. 💛
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/lista" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a lista
          </Link>
          <Link to="/" className="btn-ghost">
            <Heart className="w-4 h-4" />
            Início
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
