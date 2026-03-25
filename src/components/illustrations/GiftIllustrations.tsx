import { motion } from 'framer-motion'

// ─── PALETTE ──────────────────────────────────────────────────────────────
const H = {
  skin: '#F5C5A0', shade: '#E0A078', hair: '#4A2A0A',
  beanie: '#F8F4ED', beanieRib: '#EDE8D8',
  jacket: '#F2EDE4', top: '#FFFFFF',
  blush: '#F0A0A0', lip: '#E07868',
}
const G = {
  skin: '#E8AE78', shade: '#C89060', hair: '#2A1808', beard: '#3A200C',
  shirt: '#9BAEC8', blush: '#D4906A', lip: '#B86848',
}
const D = {
  white: '#F5F0E8', brown: '#C87840', black: '#2A2028',
  bow: '#43A047', bowShine: '#76C27A', bowCenter: '#D32F2F', nose: '#181018', eye: '#3A2010',
}
const W = '#FFFFFF', S = '#FFFCF8'

const fa = (delay = 0, range = 7) => ({
  animate: { y: [0, -range, 0] },
  transition: { duration: 3.2, delay, repeat: Infinity, ease: 'easeInOut' as const },
})

// ─── HELOISE ──────────────────────────────────────────────────────────────
function Heloise({ cx = 0, cy = 0, sc = 1, expr = 'happy' }: { cx?: number; cy?: number; sc?: number; expr?: string }) {
  return (
    <g transform={`translate(${cx},${cy}) scale(${sc})`}>
      <ellipse cx="0" cy="5" rx="33" ry="42" fill={H.hair} />
      <path d="M-30,12 Q-48,55 -30,90" stroke={H.hair} strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M30,12 Q48,55 30,90" stroke={H.hair} strokeWidth="18" fill="none" strokeLinecap="round" />
      <circle cx="0" cy="0" r="30" fill={H.skin} />
      <ellipse cx="0" cy="24" rx="20" ry="12" fill={H.skin} />
      <ellipse cx="0" cy="10" rx="22" ry="20" fill={H.shade} opacity="0.1" />
      <ellipse cx="0" cy="-25" rx="27" ry="20" fill={H.beanie} />
      <rect x="-29" y="-17" width="58" height="14" rx="7" fill={H.beanieRib} />
      {[-20, -12, -4, 4, 12, 20].map(x => <line key={x} x1={x} y1="-17" x2={x} y2="-3" stroke={H.beanie} strokeWidth="1.5" opacity="0.55" />)}
      <ellipse cx="-18" cy="9" rx="10" ry="7" fill={H.blush} opacity="0.42" />
      <ellipse cx="18" cy="9" rx="10" ry="7" fill={H.blush} opacity="0.42" />
      <circle cx="-11" cy="-2" r="9" fill={W} /><circle cx="-11" cy="-2" r="6" fill={H.hair} /><circle cx="-11" cy="-2" r="4" fill="#7B4A20" /><circle cx="-8.5" cy="-5" r="2.2" fill={S} />
      <path d="M-19,-9 Q-17,-14 -14,-10" stroke={H.hair} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M-11,-11 Q-10,-16 -8,-12" stroke={H.hair} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M-3,-9 Q-3,-13 -5,-10" stroke={H.hair} strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="11" cy="-2" r="9" fill={W} /><circle cx="11" cy="-2" r="6" fill={H.hair} /><circle cx="11" cy="-2" r="4" fill="#7B4A20" /><circle cx="13.5" cy="-5" r="2.2" fill={S} />
      <path d="M19,-9 Q17,-14 14,-10" stroke={H.hair} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M11,-11 Q10,-16 8,-12" stroke={H.hair} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M3,-9 Q3,-13 5,-10" stroke={H.hair} strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="0" cy="7" rx="4.5" ry="3.5" fill={H.shade} opacity="0.45" />
      {expr === 'happy' && <path d="M-9,17 Q0,25 9,17" stroke={H.lip} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
      {expr === 'laugh' && <><path d="M-10,14 Q0,27 10,14" stroke={H.lip} strokeWidth="2.5" fill="none" strokeLinecap="round" /><ellipse cx="0" cy="20" rx="7" ry="5" fill={H.lip} opacity="0.15" /></>}
      {expr === 'wow' && <><circle cx="0" cy="19" r="7" fill={H.lip} opacity="0.25" /><circle cx="0" cy="19" r="4" fill={H.lip} opacity="0.2" /></>}
      {expr === 'neutral' && <path d="M-7,18 Q0,22 7,18" stroke={H.lip} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
      <path d="M-22,30 Q-32,65 -28,100 L28,100 Q32,65 22,30 Q10,36 0,36 Q-10,36 -22,30Z" fill={H.jacket} />
      <path d="M-8,30 L0,46 L8,30" fill={H.top} />
      <ellipse cx="-32" cy="58" rx="10" ry="26" fill={H.jacket} transform="rotate(14,-32,58)" />
      <ellipse cx="32" cy="58" rx="10" ry="26" fill={H.jacket} transform="rotate(-14,32,58)" />
    </g>
  )
}

// ─── GABRIEL ──────────────────────────────────────────────────────────────
function Gabriel({ cx = 0, cy = 0, sc = 1, expr = 'happy' }: { cx?: number; cy?: number; sc?: number; expr?: string }) {
  return (
    <g transform={`translate(${cx},${cy}) scale(${sc})`}>
      <circle cx="0" cy="-14" r="28" fill={G.hair} />
      <path d="M-14,-40 Q0,-46 14,-40" stroke={G.hair} strokeWidth="7" fill="none" strokeLinecap="round" />
      <circle cx="0" cy="0" r="28" fill={G.skin} />
      <ellipse cx="0" cy="22" rx="18" ry="10" fill={G.skin} />
      <ellipse cx="0" cy="10" rx="20" ry="18" fill={G.shade} opacity="0.08" />
      <ellipse cx="-10" cy="19" rx="9" ry="11" fill={G.beard} opacity="0.5" />
      <ellipse cx="10" cy="19" rx="9" ry="11" fill={G.beard} opacity="0.5" />
      <ellipse cx="0" cy="23" rx="14" ry="8" fill={G.beard} opacity="0.42" />
      <path d="M-9,12 Q0,16 9,12" stroke={G.beard} strokeWidth="3.5" fill="none" opacity="0.6" strokeLinecap="round" />
      <path d="M-17,-14 Q-10,-20 -4,-14" stroke={G.hair} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M4,-14 Q10,-20 17,-14" stroke={G.hair} strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="-17" cy="5" rx="8" ry="5.5" fill={G.blush} opacity="0.22" />
      <ellipse cx="17" cy="5" rx="8" ry="5.5" fill={G.blush} opacity="0.22" />
      <circle cx="-10" cy="-3" r="8" fill={W} /><circle cx="-10" cy="-3" r="5.5" fill={G.hair} /><circle cx="-10" cy="-3" r="3.5" fill="#7B4A20" /><circle cx="-7.5" cy="-6" r="1.8" fill={S} />
      <circle cx="10" cy="-3" r="8" fill={W} /><circle cx="10" cy="-3" r="5.5" fill={G.hair} /><circle cx="10" cy="-3" r="3.5" fill="#7B4A20" /><circle cx="12.5" cy="-6" r="1.8" fill={S} />
      <ellipse cx="0" cy="7" rx="5" ry="3.5" fill={G.shade} opacity="0.45" />
      {expr === 'happy' && <path d="M-9,18 Q0,26 9,18" stroke={G.lip} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
      {expr === 'smile' && <path d="M-7,17 Q0,24 7,17" stroke={G.lip} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
      {expr === 'laugh' && <><path d="M-10,15 Q0,27 10,15" stroke={G.lip} strokeWidth="2.5" fill="none" strokeLinecap="round" /><ellipse cx="0" cy="21" rx="7" ry="5" fill={G.lip} opacity="0.12" /></>}
      {expr === 'focused' && <path d="M-6,18 Q0,22 6,18" stroke={G.lip} strokeWidth="2" fill="none" strokeLinecap="round" />}
      {expr === 'wow' && <><circle cx="0" cy="20" r="7" fill={G.lip} opacity="0.22" /><circle cx="0" cy="20" r="4" fill={G.lip} opacity="0.18" /></>}
      <path d="M-24,28 Q-34,62 -30,98 L30,98 Q34,62 24,28 Q12,34 0,34 Q-12,34 -24,28Z" fill={G.shirt} />
      <path d="M-6,28 L-8,44 L0,42 L8,44 L6,28" fill="#8A9EB8" />
      <ellipse cx="-33" cy="60" rx="11" ry="26" fill={G.shirt} transform="rotate(13,-33,60)" />
      <ellipse cx="33" cy="60" rx="11" ry="26" fill={G.shirt} transform="rotate(-13,33,60)" />
    </g>
  )
}

// ─── MIKE ─────────────────────────────────────────────────────────────────
function Mike({ cx = 0, cy = 0, sc = 1 }: { cx?: number; cy?: number; sc?: number }) {
  return (
    <g transform={`translate(${cx},${cy}) scale(${sc})`}>
      <ellipse cx="0" cy="38" rx="28" ry="24" fill={D.white} />
      <ellipse cx="10" cy="32" rx="18" ry="20" fill={D.brown} />
      <ellipse cx="-14" cy="62" rx="9" ry="16" fill={D.white} />
      <ellipse cx="14" cy="62" rx="9" ry="16" fill={D.brown} />
      <path d="M28,42 Q55,22 42,8" stroke={D.white} strokeWidth="11" fill="none" strokeLinecap="round" />
      <circle cx="0" cy="0" r="30" fill={D.white} />
      <path d="M6,-28 Q26,-18 28,0 Q26,18 10,18 Q2,12 2,-8Z" fill={D.brown} />
      <ellipse cx="-12" cy="-10" rx="11" ry="9" fill={D.black} opacity="0.8" />
      <ellipse cx="-24" cy="-18" rx="10" ry="17" fill={D.black} transform="rotate(-18,-24,-18)" />
      <ellipse cx="-23" cy="-18" rx="6" ry="12" fill="#303030" transform="rotate(-18,-23,-18)" />
      <ellipse cx="24" cy="-18" rx="10" ry="17" fill={D.brown} transform="rotate(18,24,-18)" />
      <ellipse cx="23" cy="-18" rx="6" ry="12" fill="#D89858" transform="rotate(18,23,-18)" />
      <circle cx="-10" cy="-8" r="8.5" fill={W} /><circle cx="-10" cy="-8" r="6" fill={D.eye} /><circle cx="-10" cy="-8" r="3.5" fill="#0A0808" /><circle cx="-7.5" cy="-11" r="2.2" fill={S} />
      <circle cx="10" cy="-8" r="8.5" fill={W} /><circle cx="10" cy="-8" r="6" fill={D.eye} /><circle cx="10" cy="-8" r="3.5" fill="#0A0808" /><circle cx="12.5" cy="-11" r="2.2" fill={S} />
      <path d="M-7,6 Q0,2 7,6 Q5,14 0,15 Q-5,14 -7,6Z" fill={D.nose} />
      <ellipse cx="-2" cy="7" rx="2.5" ry="2" fill="#302028" opacity="0.5" />
      <path d="M-5,15 Q0,20 5,15" stroke={D.nose} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M0,20 L0,24" stroke={D.nose} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <g transform="translate(0,40)">
        <path d="M-17,-4 L-4,4 L-17,12 Z" fill={D.bow} />
        <path d="M17,-4 L4,4 L17,12 Z" fill={D.bow} />
        <circle cx="0" cy="4" r="7" fill={D.bowCenter} />
        <ellipse cx="-11" cy="0" rx="4" ry="3" fill={D.bowShine} opacity="0.65" />
        <ellipse cx="11" cy="0" rx="4" ry="3" fill={D.bowShine} opacity="0.65" />
        {[[-14, 8], [14, 6], [-8, -2], [8, 9], [0, -3]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill="#A5D6A7" opacity="0.75" />
        ))}
      </g>
    </g>
  )
}

// ─── EIFFEL TOWER ─────────────────────────────────────────────────────────
function Eiffel({ x = 150, y = 50, s = 1, color = '#C9A84C', opacity = 0.55 }: { x?: number; y?: number; s?: number; color?: string; opacity?: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} opacity={opacity}>
      <path d="M-28,130 L-6,0 L6,0 L28,130Z" fill={color} />
      <rect x="-20" y="58" width="40" height="8" rx="3" fill={color} />
      <rect x="-10" y="28" width="20" height="6" rx="2" fill={color} />
      <path d="M-10,0 L0,-70 L10,0Z" fill={color} />
      <line x1="0" y1="-70" x2="0" y2="-84" stroke={color} strokeWidth="3" />
    </g>
  )
}

// ─── SCENES ───────────────────────────────────────────────────────────────

function SceneCoupleLaugh({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF6D6" />
          <stop offset="100%" stopColor="#FFE4A8" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      <circle cx="150" cy="280" r="80" fill="#FFCC70" opacity="0.2" />
      {[[45, 52], [255, 45], [150, 28], [280, 110], [22, 130]].map(([x, y], i) => (
        <text key={i} x={x} y={y} fontSize="16" fill="#FFA726" opacity="0.65" textAnchor="middle">✦</text>
      ))}
      <rect x="38" y="50" width="62" height="26" rx="13" fill="white" opacity="0.9" />
      <text x="69" y="68" fontSize="13" textAnchor="middle" fill="#E07028" fontFamily="sans-serif" fontWeight="bold">haha!</text>
      <rect x="198" y="55" width="62" height="26" rx="13" fill="white" opacity="0.9" />
      <text x="229" y="73" fontSize="13" textAnchor="middle" fill="#E07028" fontFamily="sans-serif" fontWeight="bold">rsrs!</text>
      <text x="150" y="105" fontSize="20" textAnchor="middle" fill="#FF6B6B" opacity="0.7">♥</text>
      <motion.g {...fa(0.2)}>
        <Heloise cx={90} cy={192} sc={1.38} expr="laugh" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={192} sc={1.38} expr="laugh" />
      </motion.g>
    </svg>
  )
}

function SceneGabrielLaptop({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8EAF6" />
          <stop offset="100%" stopColor="#C5CAE9" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Books stacked */}
      <rect x="20" y="200" width="50" height="12" rx="3" fill="#E57373" /><rect x="22" y="188" width="46" height="12" rx="3" fill="#81C784" /><rect x="24" y="176" width="44" height="12" rx="3" fill="#64B5F6" />
      {/* Laptop */}
      <rect x="95" y="232" width="110" height="8" rx="4" fill="#9E9E9E" />
      <rect x="100" y="190" width="100" height="65" rx="6" fill="#424242" />
      <rect x="105" y="195" width="90" height="55" rx="4" fill="#1565C0" />
      {/* Screen glow */}
      <rect x="108" y="198" width="84" height="49" rx="3" fill="#1976D2" opacity="0.8" />
      <text x="150" y="230" fontSize="18" textAnchor="middle" fill="#90CAF9">📊</text>
      {/* Stars/sparkles */}
      <text x="250" y="60" fontSize="14" fill="#7986CB" opacity="0.8">✦</text>
      <text x="40" y="80" fontSize="12" fill="#7986CB" opacity="0.7">★</text>
      <motion.g {...fa(0.3)}>
        <Gabriel cx={152} cy={170} sc={1.5} expr="focused" />
      </motion.g>
      {/* Heloise peeking from left */}
      <motion.g {...fa(0.8, 4)}>
        <Heloise cx={48} cy={178} sc={0.7} expr="happy" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleRelax({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCE4EC" />
          <stop offset="100%" stopColor="#F8BBD0" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Couch */}
      <rect x="20" y="228" width="260" height="55" rx="18" fill="#CE93D8" />
      <rect x="20" y="210" width="260" height="28" rx="10" fill="#BA68C8" />
      <rect x="20" y="210" width="55" height="70" rx="14" fill="#AB47BC" />
      <rect x="225" y="210" width="55" height="70" rx="14" fill="#AB47BC" />
      {/* TV glow */}
      <rect x="80" y="30" width="140" height="90" rx="8" fill="#263238" />
      <rect x="85" y="35" width="130" height="80" rx="5" fill="#1A237E" opacity="0.9" />
      <circle cx="150" cy="75" r="22" fill="#283593" />
      <text x="150" y="83" fontSize="22" textAnchor="middle">🎬</text>
      <rect x="148" y="120" width="4" height="15" fill="#37474F" />
      <rect x="130" y="133" width="40" height="6" rx="3" fill="#455A64" />
      {/* Popcorn */}
      <rect x="135" y="215" width="28" height="22" rx="4" fill="#FFF9C4" />
      <text x="149" y="230" fontSize="12" textAnchor="middle">🍿</text>
      <motion.g {...fa(0.2)}>
        <Heloise cx={88} cy={198} sc={1.3} expr="happy" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={212} cy={198} sc={1.3} expr="smile" />
      </motion.g>
      {/* Mike between them */}
      <motion.g {...fa(0.4, 4)}>
        <Mike cx={152} cy={220} sc={0.65} />
      </motion.g>
    </svg>
  )
}

function SceneCoupleMoney({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E3F2FD" />
          <stop offset="100%" stopColor="#BBDEFB" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* City silhouette */}
      {[[20, 280, 35, 80], [55, 280, 28, 100], [83, 280, 22, 60], [210, 280, 32, 90], [242, 280, 25, 70], [267, 280, 30, 110]].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y - h} width={w} height={h} fill="#90A4AE" opacity="0.35" />
      ))}
      {/* Euro coins floating */}
      {[[115, 80], [155, 55], [195, 75], [140, 105]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <circle cx="0" cy="0" r="18" fill="#FDD835" opacity="0.9" />
          <circle cx="0" cy="0" r="14" fill="#F9A825" opacity="0.5" />
          <text x="0" y="6" fontSize="14" textAnchor="middle" fill="#E65100" fontWeight="bold">€</text>
        </g>
      ))}
      <motion.g {...fa(0.2)}>
        <Heloise cx={88} cy={195} sc={1.38} expr="wow" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={212} cy={195} sc={1.38} expr="wow" />
      </motion.g>
    </svg>
  )
}

function SceneGabrielBarber({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E0F7FA" />
          <stop offset="100%" stopColor="#B2EBF2" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Mirror */}
      <rect x="90" y="20" width="120" height="140" rx="8" fill="#E0E0E0" opacity="0.6" />
      <rect x="93" y="23" width="114" height="134" rx="6" fill="#B3E5FC" opacity="0.7" />
      {/* Barber chair back */}
      <rect x="100" y="200" width="100" height="75" rx="12" fill="#00838F" />
      <rect x="95" y="195" width="110" height="18" rx="9" fill="#00ACC1" />
      {/* Scissors floating */}
      <motion.g animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <text x="52" y="100" fontSize="28" textAnchor="middle">✂️</text>
      </motion.g>
      <text x="248" y="95" fontSize="22" textAnchor="middle">✂️</text>
      {/* Barber cape */}
      <path d="M110,195 Q150,205 190,195 L195,270 Q150,278 105,270Z" fill="#ECEFF1" opacity="0.9" />
      <motion.g {...fa(0.4)}>
        <Gabriel cx={150} cy={168} sc={1.5} expr="happy" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleShopping({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCE4EC" />
          <stop offset="100%" stopColor="#F48FB1" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Store front */}
      <rect x="30" y="60" width="240" height="140" rx="6" fill="#F8BBD0" opacity="0.7" />
      <rect x="30" y="55" width="240" height="20" rx="4" fill="#E91E63" opacity="0.7" />
      {[50, 90, 130, 170, 210].map((x, i) => (
        <rect key={i} x={x} y="55" width="3" height="20" fill="#C2185B" opacity="0.5" />
      ))}
      <text x="150" y="72" fontSize="11" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="bold">PARIS BOUTIQUE</text>
      {/* Store windows */}
      <rect x="50" y="85" width="80" height="85" rx="4" fill="#B3E5FC" opacity="0.7" />
      <rect x="170" y="85" width="80" height="85" rx="4" fill="#B3E5FC" opacity="0.7" />
      {/* Shopping bags */}
      <g transform="translate(68,235)"><rect x="-15" y="-30" width="30" height="35" rx="4" fill="#E91E63" /><path d="M-8,-30 Q0,-42 8,-30" stroke="#C2185B" strokeWidth="2.5" fill="none"/></g>
      <g transform="translate(230,240)"><rect x="-14" y="-28" width="28" height="32" rx="4" fill="#7E57C2" /><path d="M-7,-28 Q0,-40 7,-28" stroke="#512DA8" strokeWidth="2.5" fill="none"/></g>
      <motion.g {...fa(0.2)}>
        <Heloise cx={90} cy={192} sc={1.35} expr="laugh" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={192} sc={1.35} expr="happy" />
      </motion.g>
    </svg>
  )
}

function SceneMikeFrench({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8E1" />
          <stop offset="100%" stopColor="#FFE082" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      <Eiffel x={240} y={80} s={0.45} color="#C9A84C" opacity={0.5} />
      {/* French flag */}
      <rect x="18" y="40" width="14" height="28" fill="#002395" />
      <rect x="32" y="40" width="14" height="28" fill="white" />
      <rect x="46" y="40" width="14" height="28" fill="#ED2939" />
      <rect x="18" y="36" width="60" height="4" fill="#888" />
      {/* Baguette */}
      <ellipse cx="248" cy="220" rx="8" ry="55" fill="#D4A05A" transform="rotate(-30,248,220)" />
      <ellipse cx="248" cy="220" rx="5" ry="50" fill="#E8B870" transform="rotate(-30,248,220)" />
      {/* Speech bubble */}
      <rect x="30" y="100" width="75" height="30" rx="15" fill="white" opacity="0.9" />
      <path d="M60,130 L55,145 L70,130Z" fill="white" opacity="0.9" />
      <text x="67" y="121" fontSize="14" textAnchor="middle" fill="#E07028" fontFamily="sans-serif" fontWeight="bold">Oui!</text>
      {/* Mini beret on Mike */}
      <ellipse cx="152" cy="55" rx="28" ry="10" fill="#C62828" />
      <ellipse cx="163" cy="50" rx="8" ry="5" fill="#B71C1C" />
      <motion.g {...fa(0.3)}>
        <Mike cx={152} cy={185} sc={1.55} />
      </motion.g>
    </svg>
  )
}

function SceneCoupleAirplane({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E3F2FD" />
          <stop offset="100%" stopColor="#90CAF9" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Clouds */}
      {[[50, 60], [200, 40], [120, 90], [260, 85]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="22" fill="white" opacity="0.85" />
          <circle cx={x + 18} cy={y + 5} r="18" fill="white" opacity="0.85" />
          <circle cx={x - 15} cy={y + 5} r="16" fill="white" opacity="0.85" />
        </g>
      ))}
      {/* Airplane window frame */}
      <rect x="50" y="130" width="200" height="155" rx="20" fill="#37474F" />
      <rect x="55" y="135" width="190" height="145" rx="16" fill="#455A64" />
      {/* Two windows */}
      <rect x="62" y="148" width="80" height="100" rx="25" fill="#B3E5FC" opacity="0.9" />
      <rect x="157" y="148" width="80" height="100" rx="25" fill="#B3E5FC" opacity="0.9" />
      {/* Airplane wing visible */}
      <path d="M50,240 L20,290 L280,290 L280,270 Q200,255 50,240Z" fill="#78909C" opacity="0.6" />
      <motion.g {...fa(0.2)}>
        <Heloise cx={102} cy={192} sc={1.18} expr="wow" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={197} cy={192} sc={1.18} expr="happy" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleApartment({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF3E0" />
          <stop offset="100%" stopColor="#FFE0B2" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Building facade */}
      <rect x="40" y="40" width="220" height="250" rx="4" fill="#EFEBE9" />
      {/* Windows */}
      {[[60, 60], [160, 60], [60, 120], [160, 120]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="60" height="45" rx="4" fill="#B3E5FC" opacity="0.8" />
      ))}
      {/* Door */}
      <rect x="112" y="190" width="76" height="100" rx="6" fill="#6D4C41" />
      <rect x="116" y="194" width="68" height="92" rx="4" fill="#795548" />
      <circle cx="182" cy="245" r="5" fill="#FDD835" />
      {/* Door arch */}
      <ellipse cx="150" cy="192" rx="40" ry="14" fill="#5D4037" />
      {/* Potted plant */}
      <ellipse cx="48" cy="285" rx="18" ry="8" fill="#795548" />
      <path d="M48,285 L48,240" stroke="#558B2F" strokeWidth="5" />
      <circle cx="48" cy="230" r="20" fill="#66BB6A" />
      <circle cx="38" cy="240" r="12" fill="#4CAF50" />
      {/* Key floating */}
      <motion.g animate={{ rotate: [0, 20, -10, 0], y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
        <text x="230" y="160" fontSize="26" textAnchor="middle">🗝️</text>
      </motion.g>
      <motion.g {...fa(0.3)}>
        <Heloise cx={100} cy={195} sc={1.3} expr="wow" />
      </motion.g>
      <motion.g {...fa(0.7)}>
        <Gabriel cx={205} cy={195} sc={1.3} expr="happy" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleMarket({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8E1" />
          <stop offset="100%" stopColor="#FFCC80" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Striped awning */}
      <path d="M20,70 L280,70 L260,105 L40,105Z" fill="#EF5350" />
      {[60, 100, 140, 180, 220, 260].map((x, i) => (
        <path key={i} d={`M${x},70 L${x - 10},105`} stroke="white" strokeWidth="5" opacity="0.5" />
      ))}
      {/* Market stall table */}
      <rect x="30" y="200" width="240" height="16" rx="4" fill="#795548" />
      <rect x="40" y="216" width="8" height="60" rx="2" fill="#6D4C41" />
      <rect x="252" y="216" width="8" height="60" rx="2" fill="#6D4C41" />
      {/* Baguette */}
      <ellipse cx="230" cy="195" rx="7" ry="50" fill="#D4A05A" transform="rotate(-15,230,195)" />
      <ellipse cx="230" cy="195" rx="4" ry="46" fill="#E8B870" transform="rotate(-15,230,195)" />
      {/* Cheese */}
      <ellipse cx="75" cy="196" rx="22" ry="10" fill="#FDD835" />
      <ellipse cx="75" cy="190" rx="22" ry="10" fill="#FFF176" />
      <path d="M53,190 Q75,183 97,190 L97,196 Q75,190 53,196Z" fill="#F9A825" />
      {/* Wine bottle */}
      <rect x="148" y="160" width="12" height="40" rx="3" fill="#388E3C" />
      <rect x="150" y="150" width="8" height="14" rx="3" fill="#2E7D32" />
      <rect x="149" y="148" width="10" height="4" fill="#FDD835" />
      <motion.g {...fa(0.2)}>
        <Heloise cx={92} cy={188} sc={1.32} expr="happy" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={188} sc={1.32} expr="smile" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleDinner({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#880E4F" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Stars outside */}
      {[[30, 30], [80, 20], [220, 25], [270, 40], [150, 15], [60, 60], [240, 55]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="white" opacity={0.5 + (i % 3) * 0.2} />
      ))}
      <Eiffel x={150} y={25} s={0.38} color="#FDD835" opacity={0.6} />
      {/* Table */}
      <ellipse cx="150" cy="255" rx="100" ry="32" fill="#4E342E" />
      <ellipse cx="150" cy="248" rx="100" ry="32" fill="#6D4C41" />
      <ellipse cx="150" cy="245" rx="95" ry="28" fill="#D7CCC8" />
      {/* Candle left */}
      <rect x="78" y="205" width="10" height="40" rx="3" fill="#FFF9C4" />
      <ellipse cx="83" cy="200" rx="6" ry="9" fill="#FFA726" opacity="0.9" />
      <ellipse cx="83" cy="196" rx="4" ry="6" fill="#FFEE58" opacity="0.8" />
      {/* Candle right */}
      <rect x="212" y="210" width="10" height="35" rx="3" fill="#FFF9C4" />
      <ellipse cx="217" cy="205" rx="6" ry="9" fill="#FFA726" opacity="0.9" />
      <ellipse cx="217" cy="201" rx="4" ry="6" fill="#FFEE58" opacity="0.8" />
      {/* Wine glasses */}
      <path d="M115,238 Q110,215 120,210 Q130,215 125,238Z" fill="white" opacity="0.5" />
      <rect x="116" y="238" width="8" height="10" fill="white" opacity="0.4" />
      <path d="M175,238 Q170,215 180,210 Q190,215 185,238Z" fill="white" opacity="0.5" />
      <rect x="176" y="238" width="8" height="10" fill="white" opacity="0.4" />
      <motion.g {...fa(0.2)}>
        <Heloise cx={90} cy={192} sc={1.32} expr="happy" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={192} sc={1.32} expr="smile" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleExplore({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Sunset sky */}
      <ellipse cx="150" cy="280" r="200" fill="#FF8F00" opacity="0.3" />
      <Eiffel x={150} y={30} s={0.7} color="#5D4037" opacity={0.7} />
      {/* Seine river */}
      <ellipse cx="150" cy="295" rx="180" ry="40" fill="#4FC3F7" opacity="0.6" />
      {/* Sparkles */}
      {[[40, 50], [260, 55], [80, 110], [220, 100]].map(([x, y], i) => (
        <text key={i} x={x} y={y} fontSize="16" fill="#FFA726" opacity="0.7" textAnchor="middle">✦</text>
      ))}
      <motion.g {...fa(0.2)}>
        <Heloise cx={90} cy={192} sc={1.35} expr="wow" />
      </motion.g>
      <motion.g {...fa(0.7)}>
        <Gabriel cx={210} cy={192} sc={1.35} expr="happy" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleEiffel({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF3E0" />
          <stop offset="100%" stopColor="#FFCC80" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      <Eiffel x={150} y={20} s={0.75} color="#C9A84C" opacity={0.7} />
      {/* Ground */}
      <ellipse cx="150" cy="295" rx="200" ry="30" fill="#A5D6A7" opacity="0.5" />
      {/* Sparkle lights on tower */}
      {[[148, 48], [148, 80], [148, 108], [132, 95], [164, 95]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#FDD835" opacity="0.9" />
      ))}
      {[[40, 40], [260, 50], [70, 100], [235, 95], [150, 28]].map(([x, y], i) => (
        <text key={i} x={x} y={y} fontSize="14" fill="#FFB300" opacity="0.7" textAnchor="middle">✦</text>
      ))}
      <text x="150" y="120" fontSize="18" textAnchor="middle" fill="#FF6B6B" opacity="0.8">♥</text>
      <motion.g {...fa(0.2)}>
        <Heloise cx={90} cy={193} sc={1.35} expr="wow" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={193} sc={1.35} expr="happy" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleWine({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EDE7F6" />
          <stop offset="100%" stopColor="#CE93D8" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Vineyard bg dots */}
      {[[30, 250], [70, 240], [110, 255], [160, 245], [200, 255], [245, 240], [280, 250]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="#7B1FA2" opacity="0.25" />
      ))}
      {/* Wine glasses */}
      <g transform="translate(112,175)">
        <path d="M0,60 Q-18,25 -15,0 L15,0 Q18,25 0,60Z" fill="white" opacity="0.6" />
        <rect x="-3" y="60" width="6" height="30" fill="white" opacity="0.5" />
        <ellipse cx="0" cy="90" rx="14" ry="5" fill="white" opacity="0.45" />
        <ellipse cx="0" cy="15" rx="12" ry="8" fill="#E91E63" opacity="0.4" />
      </g>
      <g transform="translate(188,175)">
        <path d="M0,60 Q-18,25 -15,0 L15,0 Q18,25 0,60Z" fill="white" opacity="0.6" />
        <rect x="-3" y="60" width="6" height="30" fill="white" opacity="0.5" />
        <ellipse cx="0" cy="90" rx="14" ry="5" fill="white" opacity="0.45" />
        <ellipse cx="0" cy="15" rx="12" ry="8" fill="#E91E63" opacity="0.4" />
      </g>
      {/* Wine bottle */}
      <rect x="143" y="190" width="14" height="80" rx="4" fill="#388E3C" />
      <rect x="145" y="178" width="10" height="16" rx="3" fill="#2E7D32" />
      <rect x="144" y="175" width="12" height="5" fill="#FDD835" />
      {/* Sparkles */}
      {[[55, 50], [245, 50], [150, 35], [80, 100], [220, 95]].map(([x, y], i) => (
        <text key={i} x={x} y={y} fontSize="14" fill="#AB47BC" opacity="0.7" textAnchor="middle">✦</text>
      ))}
      <motion.g {...fa(0.2)}>
        <Heloise cx={90} cy={190} sc={1.35} expr="happy" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={190} sc={1.35} expr="smile" />
      </motion.g>
    </svg>
  )
}

function SceneCouplePicnic({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1F8E9" />
          <stop offset="100%" stopColor="#DCEDC8" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Sky */}
      <rect x="0" y="0" width="300" height="130" fill="#E3F2FD" opacity="0.6" />
      {/* Trees */}
      <rect x="22" y="150" width="10" height="70" rx="3" fill="#795548" />
      <circle cx="27" cy="135" r="30" fill="#66BB6A" />
      <circle cx="20" cy="148" r="18" fill="#4CAF50" />
      <rect x="258" y="155" width="10" height="65" rx="3" fill="#795548" />
      <circle cx="263" cy="140" r="28" fill="#66BB6A" />
      <circle cx="270" cy="153" r="16" fill="#4CAF50" />
      {/* Ground */}
      <ellipse cx="150" cy="295" rx="200" ry="55" fill="#A5D6A7" opacity="0.7" />
      {/* Picnic blanket */}
      <ellipse cx="150" cy="262" rx="90" ry="25" fill="#EF9A9A" opacity="0.8" />
      {/* Basket */}
      <ellipse cx="150" cy="238" rx="28" ry="14" fill="#D4A05A" />
      <rect x="122" y="224" width="56" height="20" rx="6" fill="#C68642" />
      <path d="M122,224 Q150,210 178,224" stroke="#A0522D" strokeWidth="4" fill="none" />
      {/* Flowers */}
      {[[55, 220], [245, 225], [100, 260], [200, 262]].map(([x, y], i) => (
        <text key={i} x={x} y={y} fontSize="16" textAnchor="middle">🌸</text>
      ))}
      <motion.g {...fa(0.2)}>
        <Heloise cx={90} cy={195} sc={1.32} expr="happy" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={195} sc={1.32} expr="smile" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleCafe({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#FFE0B2" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Cafe awning */}
      <path d="M10,60 L290,60 L270,100 L30,100Z" fill="#E53935" />
      {[50, 90, 130, 170, 210, 250].map((x, i) => (
        <path key={i} d={`M${x},60 L${x - 8},100`} stroke="white" strokeWidth="4" opacity="0.5" />
      ))}
      <text x="150" y="86" fontSize="11" textAnchor="middle" fill="white" fontFamily="sans-serif" fontWeight="bold">CAFÉ DE PARIS</text>
      {/* Round table */}
      <ellipse cx="150" cy="248" rx="70" ry="22" fill="#795548" />
      <ellipse cx="150" cy="242" rx="70" ry="22" fill="#A1887F" />
      <rect x="144" y="264" width="12" height="30" rx="4" fill="#6D4C41" />
      {/* Coffee cups */}
      <g transform="translate(118,228)"><ellipse cx="0" cy="0" rx="16" ry="9" fill="#FFF8F0"/><ellipse cx="0" cy="-3" rx="13" ry="7" fill="#4E342E"/><ellipse cx="0" cy="-5" rx="10" ry="5" fill="#795548" opacity="0.7"/></g>
      <g transform="translate(182,228)"><ellipse cx="0" cy="0" rx="16" ry="9" fill="#FFF8F0"/><ellipse cx="0" cy="-3" rx="13" ry="7" fill="#4E342E"/><ellipse cx="0" cy="-5" rx="10" ry="5" fill="#795548" opacity="0.7"/></g>
      {/* Croissant */}
      <text x="150" y="225" fontSize="18" textAnchor="middle">🥐</text>
      <motion.g {...fa(0.2)}>
        <Heloise cx={90} cy={193} sc={1.3} expr="happy" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={193} sc={1.3} expr="smile" />
      </motion.g>
    </svg>
  )
}

function SceneMikePark({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8F5E9" />
          <stop offset="100%" stopColor="#A5D6A7" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Sky */}
      <rect x="0" y="0" width="300" height="120" fill="#E3F2FD" opacity="0.7" />
      {/* Sun */}
      <circle cx="250" cy="45" r="28" fill="#FDD835" opacity="0.8" />
      {/* Trees */}
      <rect x="18" y="165" width="12" height="80" rx="4" fill="#795548" />
      <circle cx="24" cy="148" r="32" fill="#4CAF50" />
      <circle cx="14" cy="163" r="20" fill="#388E3C" />
      <rect x="260" y="170" width="12" height="75" rx="4" fill="#795548" />
      <circle cx="266" cy="153" r="30" fill="#4CAF50" />
      {/* Ground */}
      <ellipse cx="150" cy="290" rx="200" ry="50" fill="#66BB6A" opacity="0.6" />
      {/* Flowers */}
      {[[60, 252], [100, 260], [190, 258], [235, 248]].map(([x, y], i) => (
        <text key={i} x={x} y={y} fontSize="14" textAnchor="middle">🌼</text>
      ))}
      {/* Ball */}
      <motion.g animate={{ x: [0, 30, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
        <circle cx="220" cy="242" r="16" fill="#EF5350" />
        <ellipse cx="220" cy="240" rx="14" ry="8" fill="#E53935" opacity="0.6" />
      </motion.g>
      <motion.g {...fa(0.2, 10)}>
        <Mike cx={148} cy={182} sc={1.65} />
      </motion.g>
    </svg>
  )
}

function SceneFamilyPhoto({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="100%" stopColor="#FFECB3" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Photo frame border */}
      <rect x="8" y="8" width="284" height="284" rx="16" fill="none" stroke="#C9A84C" strokeWidth="5" />
      <rect x="14" y="14" width="272" height="272" rx="12" fill="none" stroke="#FDD835" strokeWidth="2" opacity="0.5" />
      {/* Camera */}
      <g transform="translate(240,50)">
        <rect x="-20" y="-15" width="40" height="30" rx="6" fill="#424242" />
        <circle cx="0" cy="0" r="10" fill="#263238" />
        <circle cx="0" cy="0" r="7" fill="#37474F" />
        <circle cx="0" cy="0" r="4" fill="#1A1A1A" />
        <circle cx="-2" cy="-2" r="1.5" fill="white" opacity="0.6" />
        <rect x="-6" y="-20" width="12" height="6" rx="2" fill="#616161" />
      </g>
      {/* Sky backdrop circles */}
      <circle cx="150" cy="80" r="100" fill="#E3F2FD" opacity="0.3" />
      {/* Photo flash */}
      <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }}>
        <circle cx="240" cy="50" r="30" fill="white" opacity="0.3" />
      </motion.g>
      {/* Characters */}
      <motion.g {...fa(0.2)}>
        <Heloise cx={88} cy={192} sc={1.32} expr="happy" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={212} cy={192} sc={1.32} expr="smile" />
      </motion.g>
      <motion.g {...fa(0.4, 5)}>
        <Mike cx={150} cy={218} sc={0.68} />
      </motion.g>
    </svg>
  )
}

function SceneCoupleDecor({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1F8E9" />
          <stop offset="100%" stopColor="#DCEDC8" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Wall */}
      <rect x="0" y="0" width="300" height="220" fill="#F9FBE7" opacity="0.6" />
      {/* French window */}
      <rect x="100" y="15" width="100" height="130" rx="50" fill="#B3E5FC" opacity="0.7" />
      <rect x="100" y="15" width="100" height="130" rx="50" fill="none" stroke="#795548" strokeWidth="5" />
      <line x1="150" y1="15" x2="150" y2="145" stroke="#795548" strokeWidth="3" />
      <line x1="100" y1="80" x2="200" y2="80" stroke="#795548" strokeWidth="3" />
      {/* Picture frames */}
      <rect x="18" y="35" width="65" height="55" rx="4" fill="#D4A05A" />
      <rect x="23" y="40" width="55" height="45" rx="2" fill="#E8D5B0" />
      <text x="50" y="68" fontSize="20" textAnchor="middle">🌸</text>
      {/* Plants */}
      <ellipse cx="42" cy="200" rx="14" ry="7" fill="#795548" />
      <path d="M42,200 L42,168" stroke="#558B2F" strokeWidth="5" />
      <circle cx="42" cy="158" r="18" fill="#66BB6A" />
      <ellipse cx="255" cy="198" rx="16" ry="8" fill="#6D4C41" />
      <path d="M255,198 L255,162" stroke="#558B2F" strokeWidth="5" />
      <circle cx="255" cy="150" r="20" fill="#4CAF50" />
      <circle cx="266" cy="162" r="12" fill="#388E3C" />
      <motion.g {...fa(0.2)}>
        <Heloise cx={95} cy={195} sc={1.3} expr="happy" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={195} sc={1.3} expr="smile" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleOffice({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8EAF6" />
          <stop offset="100%" stopColor="#9FA8DA" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Desk */}
      <rect x="30" y="222" width="240" height="16" rx="5" fill="#5D4037" />
      <rect x="38" y="238" width="10" height="55" rx="3" fill="#4E342E" />
      <rect x="252" y="238" width="10" height="55" rx="3" fill="#4E342E" />
      {/* Monitor */}
      <rect x="105" y="148" width="120" height="78" rx="7" fill="#212121" />
      <rect x="110" y="153" width="110" height="68" rx="5" fill="#1565C0" />
      <rect x="113" y="156" width="104" height="62" rx="3" fill="#1976D2" opacity="0.9" />
      <text x="165" y="195" fontSize="22" textAnchor="middle">📈</text>
      <rect x="157" y="226" width="16" height="10" rx="2" fill="#424242" />
      <rect x="144" y="236" width="42" height="5" rx="2" fill="#616161" />
      {/* Books */}
      <rect x="32" y="180" width="14" height="42" rx="2" fill="#EF5350" /><rect x="46" y="184" width="12" height="38" rx="2" fill="#4CAF50" /><rect x="58" y="178" width="14" height="44" rx="2" fill="#42A5F5" />
      {/* Coffee mug */}
      <ellipse cx="264" cy="222" rx="14" ry="7" fill="#FFF8F0" /><ellipse cx="264" cy="218" rx="12" ry="6" fill="#4E342E" /><ellipse cx="264" cy="215" rx="9" ry="5" fill="#795548" opacity="0.7" />
      <motion.g {...fa(0.3)}>
        <Gabriel cx={148} cy={185} sc={1.32} expr="focused" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleOutfits({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A237E" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Stars */}
      {[[30, 30], [80, 20], [220, 25], [270, 40], [150, 15], [55, 70], [240, 65], [100, 85], [200, 80]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 2 : 1.5} fill="white" opacity={0.4 + (i % 4) * 0.15} />
      ))}
      {/* Spotlight circles */}
      <circle cx="90" cy="280" r="80" fill="#7986CB" opacity="0.15" />
      <circle cx="210" cy="280" r="80" fill="#CE93D8" opacity="0.15" />
      {/* Sparkles */}
      {[[60, 110], [240, 105], [150, 80]].map(([x, y], i) => (
        <text key={i} x={x} y={y} fontSize="16" fill="#FDD835" opacity="0.8" textAnchor="middle">✦</text>
      ))}
      {/* Heloise in elegant outfit */}
      <motion.g {...fa(0.2)}>
        <g transform="translate(90,195) scale(1.38)">
          <ellipse cx="0" cy="5" rx="33" ry="42" fill={H.hair} />
          <path d="M-30,12 Q-48,55 -30,90" stroke={H.hair} strokeWidth="18" fill="none" strokeLinecap="round" />
          <path d="M30,12 Q48,55 30,90" stroke={H.hair} strokeWidth="18" fill="none" strokeLinecap="round" />
          <circle cx="0" cy="0" r="30" fill={H.skin} />
          <ellipse cx="0" cy="24" rx="20" ry="12" fill={H.skin} />
          <ellipse cx="0" cy="-25" rx="27" ry="20" fill={H.beanie} />
          <rect x="-29" y="-17" width="58" height="14" rx="7" fill={H.beanieRib} />
          <ellipse cx="-18" cy="9" rx="10" ry="7" fill={H.blush} opacity="0.42" />
          <ellipse cx="18" cy="9" rx="10" ry="7" fill={H.blush} opacity="0.42" />
          <circle cx="-11" cy="-2" r="9" fill={W} /><circle cx="-11" cy="-2" r="6" fill={H.hair} /><circle cx="-11" cy="-2" r="4" fill="#7B4A20" /><circle cx="-8.5" cy="-5" r="2.2" fill={S} />
          <circle cx="11" cy="-2" r="9" fill={W} /><circle cx="11" cy="-2" r="6" fill={H.hair} /><circle cx="11" cy="-2" r="4" fill="#7B4A20" /><circle cx="13.5" cy="-5" r="2.2" fill={S} />
          <path d="M-9,17 Q0,25 9,17" stroke={H.lip} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Elegant dress */}
          <path d="M-24,30 Q-35,65 -30,100 L30,100 Q35,65 24,30 Q10,38 0,38 Q-10,38 -24,30Z" fill="#880E4F" />
          <path d="M-6,30 L0,44 L6,30" fill="#AD1457" />
        </g>
      </motion.g>
      {/* Gabriel in suit */}
      <motion.g {...fa(0.6)}>
        <g transform="translate(210,195) scale(1.38)">
          <circle cx="0" cy="-14" r="28" fill={G.hair} />
          <circle cx="0" cy="0" r="28" fill={G.skin} />
          <ellipse cx="0" cy="22" rx="18" ry="10" fill={G.skin} />
          <ellipse cx="-10" cy="19" rx="9" ry="11" fill={G.beard} opacity="0.5" />
          <ellipse cx="10" cy="19" rx="9" ry="11" fill={G.beard} opacity="0.5" />
          <ellipse cx="0" cy="23" rx="14" ry="8" fill={G.beard} opacity="0.42" />
          <path d="M-17,-14 Q-10,-20 -4,-14" stroke={G.hair} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M4,-14 Q10,-20 17,-14" stroke={G.hair} strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="-10" cy="-3" r="8" fill={W} /><circle cx="-10" cy="-3" r="5.5" fill={G.hair} /><circle cx="-10" cy="-3" r="3.5" fill="#7B4A20" /><circle cx="-7.5" cy="-6" r="1.8" fill={S} />
          <circle cx="10" cy="-3" r="8" fill={W} /><circle cx="10" cy="-3" r="5.5" fill={G.hair} /><circle cx="10" cy="-3" r="3.5" fill="#7B4A20" /><circle cx="12.5" cy="-6" r="1.8" fill={S} />
          <path d="M-9,18 Q0,26 9,18" stroke={G.lip} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Suit */}
          <path d="M-24,28 Q-34,62 -30,98 L30,98 Q34,62 24,28 Q12,34 0,34 Q-12,34 -24,28Z" fill="#1A237E" />
          <path d="M-8,28 L-10,44 L0,40 L10,44 L8,28" fill="#283593" />
          <rect x="-2" y="42" width="4" height="20" fill="#1A237E" />
          <circle cx="0" cy="38" r="2.5" fill="#FDD835" />
        </g>
      </motion.g>
    </svg>
  )
}

function SceneCoupleTravel({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E0F2F1" />
          <stop offset="100%" stopColor="#80DEEA" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Map background lines */}
      {[50, 100, 150, 200, 250].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="300" y2={y} stroke="#B2EBF2" strokeWidth="1" opacity="0.6" />
      ))}
      {[50, 100, 150, 200, 250].map((x, i) => (
        <line key={i} x1={x} y1="0" x2={x} y2="300" stroke="#B2EBF2" strokeWidth="1" opacity="0.6" />
      ))}
      {/* Landmarks */}
      <Eiffel x={55} y={55} s={0.3} color="#00838F" opacity={0.7} />
      <text x="230" y="80" fontSize="22" textAnchor="middle">🗺️</text>
      <text x="250" y="200" fontSize="18" textAnchor="middle">🏛️</text>
      <text x="48" y="195" fontSize="18" textAnchor="middle">🏰</text>
      {/* Route dots */}
      {[[80, 120], [110, 100], [145, 115], [175, 100], [210, 115]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#00838F" opacity="0.7" />
      ))}
      <path d="M80,120 Q110,95 145,115 Q175,100 210,115" stroke="#00838F" strokeWidth="2" fill="none" strokeDasharray="6,4" opacity="0.7" />
      {/* Backpacks */}
      <rect x="55" y="235" width="28" height="38" rx="8" fill="#FF8A65" /><rect x="58" y="228" width="22" height="10" rx="5" fill="#FF7043" />
      <rect x="220" y="232" width="28" height="38" rx="8" fill="#42A5F5" /><rect x="223" y="225" width="22" height="10" rx="5" fill="#2196F3" />
      <motion.g {...fa(0.2)}>
        <Heloise cx={92} cy={195} sc={1.3} expr="wow" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={210} cy={195} sc={1.3} expr="happy" />
      </motion.g>
    </svg>
  )
}

function SceneCoupleGift({ uid }: { uid: string }) {
  return (
    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3E5F5" />
          <stop offset="100%" stopColor="#E1BEE7" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${uid})`} />
      {/* Confetti */}
      {[[40, 30], [90, 20], [180, 28], [240, 35], [60, 65], [260, 60], [130, 45]].map(([x, y], i) => (
        <rect key={i} x={x - 4} y={y - 4} width="8" height="8" rx="2"
          fill={['#F48FB1', '#80DEEA', '#FDD835', '#A5D6A7', '#CE93D8'][i % 5]}
          opacity="0.75"
          transform={`rotate(${i * 30},${x},${y})`} />
      ))}
      {/* Gift box */}
      <rect x="90" y="185" width="120" height="90" rx="8" fill="#E91E63" />
      <rect x="90" y="170" width="120" height="22" rx="6" fill="#C2185B" />
      {/* Ribbon vertical */}
      <rect x="143" y="170" width="14" height="105" rx="4" fill="#FDD835" />
      {/* Bow */}
      <path d="M150,165 Q130,140 118,155 Q130,168 150,165Z" fill="#FDD835" />
      <path d="M150,165 Q170,140 182,155 Q170,168 150,165Z" fill="#FDD835" />
      <circle cx="150" cy="165" r="9" fill="#FFB300" />
      {/* Stars */}
      {[[45, 50], [255, 55], [150, 30], [80, 110], [220, 108]].map(([x, y], i) => (
        <text key={i} x={x} y={y} fontSize="14" fill="#AB47BC" opacity="0.7" textAnchor="middle">✦</text>
      ))}
      <text x="150" y="120" fontSize="22" textAnchor="middle" fill="#FF6B6B" opacity="0.8">♥</text>
      <motion.g {...fa(0.2)}>
        <Heloise cx={88} cy={182} sc={1.25} expr="wow" />
      </motion.g>
      <motion.g {...fa(0.6)}>
        <Gabriel cx={212} cy={182} sc={1.25} expr="happy" />
      </motion.g>
    </svg>
  )
}

// ─── SCENE MAP ────────────────────────────────────────────────────────────
const SCENES: Record<string, (uid: string) => JSX.Element> = {
  'couple-laugh': (uid) => <SceneCoupleLaugh uid={uid} />,
  'gabriel-laptop': (uid) => <SceneGabrielLaptop uid={uid} />,
  'couple-relax': (uid) => <SceneCoupleRelax uid={uid} />,
  'couple-money': (uid) => <SceneCoupleMoney uid={uid} />,
  'gabriel-barber': (uid) => <SceneGabrielBarber uid={uid} />,
  'couple-shopping': (uid) => <SceneCoupleShopping uid={uid} />,
  'mike-french': (uid) => <SceneMikeFrench uid={uid} />,
  'couple-airplane': (uid) => <SceneCoupleAirplane uid={uid} />,
  'couple-apartment': (uid) => <SceneCoupleApartment uid={uid} />,
  'couple-market': (uid) => <SceneCoupleMarket uid={uid} />,
  'couple-dinner': (uid) => <SceneCoupleDinner uid={uid} />,
  'couple-explore': (uid) => <SceneCoupleExplore uid={uid} />,
  'couple-eiffel': (uid) => <SceneCoupleEiffel uid={uid} />,
  'couple-wine': (uid) => <SceneCoupleWine uid={uid} />,
  'couple-picnic': (uid) => <SceneCouplePicnic uid={uid} />,
  'couple-cafe': (uid) => <SceneCoupleCafe uid={uid} />,
  'mike-park': (uid) => <SceneMikePark uid={uid} />,
  'family-photo': (uid) => <SceneFamilyPhoto uid={uid} />,
  'couple-decor': (uid) => <SceneCoupleDecor uid={uid} />,
  'couple-office': (uid) => <SceneCoupleOffice uid={uid} />,
  'couple-outfits': (uid) => <SceneCoupleOutfits uid={uid} />,
  'couple-travel': (uid) => <SceneCoupleTravel uid={uid} />,
  'couple-gift': (uid) => <SceneCoupleGift uid={uid} />,
}

export default function GiftIllustration({ sceneId, uid }: { sceneId: string; uid: string }) {
  const render = SCENES[sceneId]
  if (!render) return null
  return render(uid)
}
