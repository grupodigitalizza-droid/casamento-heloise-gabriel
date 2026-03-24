import { motion } from 'framer-motion'
import { categories } from '@/data/giftItems'

interface Props {
  selected: string
  onSelect: (id: string) => void
}

export default function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
            selected === cat.id
              ? 'bg-terracotta text-white shadow-md shadow-terracotta/20'
              : 'bg-white text-charcoal border border-champagne/70 hover:border-terracotta/40 hover:bg-champagne/20'
          }`}
        >
          {cat.label}
        </motion.button>
      ))}
    </div>
  )
}
