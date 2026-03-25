export interface GiftItem {
  id: number
  title: string
  price: number
  description: string
  emotion: string
  category: string
  emoji: string
  gradient: string
  accentColor: string
  scene: string
}

export const categories = [
  { id: 'all', label: '✨ Todos', emoji: '✨' },
  { id: 'memes', label: '😂 Memes que fazem sentido', emoji: '😂' },
  { id: 'paris', label: '🗼 Nova vida em Paris', emoji: '🗼' },
  { id: 'mike', label: '🐶 Mike na França', emoji: '🐶' },
  { id: 'casa', label: '🏡 Casa nova', emoji: '🏡' },
  { id: 'experiencias', label: '❤️ Experiências do casal', emoji: '❤️' },
  { id: 'premium', label: '💎 Presentes premium', emoji: '💎' },
  { id: 'surpresa', label: '💝 Presente surpresa', emoji: '💝' },
]

export const giftItems: GiftItem[] = [
  { id: 1, title: 'Cota para perguntar quando vêm os filhos', price: 180, description: 'Toda reunião de família alguém pergunta... agora tem taxa!', emotion: 'Humor', category: 'memes', emoji: '👶', gradient: 'from-orange-100 to-rose-100', accentColor: '#C4714A', scene: 'couple-laugh' },
  { id: 2, title: 'Ajuda para o noivo comprar mais um curso de marketing', price: 220, description: 'Porque um curso nunca é suficiente, né Gabriel?', emotion: 'Realidade', category: 'memes', emoji: '📚', gradient: 'from-amber-100 to-orange-100', accentColor: '#C9A84C', scene: 'gabriel-laptop' },
  { id: 3, title: 'Terapia depois do estresse do casamento', price: 250, description: 'Organizar casamento é lindo, mas a gente precisa conversar depois.', emotion: 'Autocuidado', category: 'memes', emoji: '🛋️', gradient: 'from-purple-100 to-pink-100', accentColor: '#9C6FBF', scene: 'couple-relax' },
  { id: 4, title: 'Fundo emergencial para quando o euro subir', price: 440, description: 'Porque a cotação do euro não perdoa ninguém.', emotion: 'Prevenção', category: 'memes', emoji: '💶', gradient: 'from-blue-100 to-indigo-100', accentColor: '#4A72C4', scene: 'couple-money' },
  { id: 5, title: '1 ano de corte de cabelo para o noivo', price: 300, description: 'Para o Gabriel continuar bonito em terras francesas.', emotion: 'Vaidade', category: 'memes', emoji: '✂️', gradient: 'from-teal-100 to-cyan-100', accentColor: '#4A9C8E', scene: 'gabriel-barber' },
  { id: 6, title: 'Vamos só dar uma olhadinha', price: 780, description: "Para quando a gente disser 'vamos só dar uma olhadinha' e gastar tudo em Paris.", emotion: 'Tentação', category: 'memes', emoji: '🛍️', gradient: 'from-rose-100 to-pink-100', accentColor: '#C44A72', scene: 'couple-shopping' },
  { id: 7, title: 'Cota para o Mike se adaptar ao francês', price: 180, description: 'Oui, oui! Nosso cachorro também vai precisar aprender a língua.', emotion: 'Fofura', category: 'memes', emoji: '🐾', gradient: 'from-amber-100 to-yellow-100', accentColor: '#C9A84C', scene: 'mike-french' },
  { id: 8, title: 'Eu sou Ricah', price: 2000, description: 'Deus tocou no seu coração. Presente generoso para abençoar o casal!', emotion: 'Generosidade', category: 'memes', emoji: '🙏', gradient: 'from-yellow-100 to-amber-100', accentColor: '#C9A84C', scene: 'couple-laugh' },
  { id: 9, title: 'Para nossa alegria', price: 1600, description: 'Contribuição especial para a felicidade do casal.', emotion: 'Alegria', category: 'memes', emoji: '🎉', gradient: 'from-pink-100 to-rose-100', accentColor: '#C44A72', scene: 'couple-laugh' },
  { id: 10, title: 'Passagem de ida para Paris', price: 2997, description: 'O voo que muda tudo. Início da nova vida na cidade luz.', emotion: 'Começo', category: 'paris', emoji: '✈️', gradient: 'from-sky-100 to-blue-100', accentColor: '#4A72C4', scene: 'couple-airplane' },
  { id: 11, title: 'Ajuda para o primeiro aluguel em Paris', price: 1200, description: 'Primeiro lar do casal na cidade mais romântica do mundo.', emotion: 'Acolhimento', category: 'paris', emoji: '🏠', gradient: 'from-indigo-100 to-purple-100', accentColor: '#7A4AC4', scene: 'couple-apartment' },
  { id: 12, title: 'Primeira compra de mercado em Paris', price: 510, description: 'Enchendo a geladeira com queijos, vinhos e baguettes.', emotion: 'Adaptação', category: 'paris', emoji: '🥖', gradient: 'from-amber-100 to-yellow-100', accentColor: '#C9A84C', scene: 'couple-market' },
  { id: 13, title: 'Primeiro jantar romântico em Paris', price: 380, description: 'Velas, vinho e a Torre Eiffel ao fundo.', emotion: 'Romance', category: 'paris', emoji: '🍷', gradient: 'from-rose-100 to-red-100', accentColor: '#C44A4A', scene: 'couple-dinner' },
  { id: 14, title: 'Passeio no Rio Sena', price: 420, description: 'Navegando pelo coração de Paris juntos.', emotion: 'Encanto', category: 'paris', emoji: '⛵', gradient: 'from-cyan-100 to-blue-100', accentColor: '#4A8EC4', scene: 'couple-explore' },
  { id: 15, title: 'Subida na Torre Eiffel', price: 390, description: 'Ver Paris do alto, de mãos dadas.', emotion: 'Conquista', category: 'paris', emoji: '🗼', gradient: 'from-slate-100 to-blue-100', accentColor: '#4A72C4', scene: 'couple-eiffel' },
  { id: 16, title: 'Degustação de vinhos franceses', price: 450, description: 'Descobrindo os melhores terroirs da França.', emotion: 'Prazer', category: 'paris', emoji: '🍾', gradient: 'from-purple-100 to-rose-100', accentColor: '#9C4A72', scene: 'couple-wine' },
  { id: 17, title: 'Piquenique em um parque parisiense', price: 280, description: 'Baguette, queijo e sol numa tarde perfeita.', emotion: 'Simplicidade', category: 'paris', emoji: '🧺', gradient: 'from-green-100 to-emerald-100', accentColor: '#4A9C72', scene: 'couple-picnic' },
  { id: 18, title: 'Primeiro café parisiense do casal', price: 190, description: 'Croissant quentinho e café com leite num bistrô charmoso.', emotion: 'Rotina gostosa', category: 'paris', emoji: '☕', gradient: 'from-amber-100 to-orange-100', accentColor: '#C4844A', scene: 'couple-cafe' },
  { id: 19, title: 'Petiscos franceses para o Mike', price: 190, description: 'Até o Mike merece iguarias francesas!', emotion: 'Mimo', category: 'mike', emoji: '🦴', gradient: 'from-amber-100 to-yellow-100', accentColor: '#C9A84C', scene: 'mike-french' },
  { id: 20, title: 'Novo brinquedo europeu para o Mike destruir', price: 210, description: 'Um brinquedo novo para o Mike mostrar sua força.', emotion: 'Diversão', category: 'mike', emoji: '🎾', gradient: 'from-green-100 to-lime-100', accentColor: '#7AC44A', scene: 'mike-french' },
  { id: 21, title: 'Passeio do Mike nos parques de Paris', price: 220, description: 'Mike descobrindo os jardins e parques parisienses.', emotion: 'Aventura', category: 'mike', emoji: '🌳', gradient: 'from-emerald-100 to-teal-100', accentColor: '#4AC49C', scene: 'mike-park' },
  { id: 22, title: 'Sessão de fotos da família em Paris', price: 480, description: 'Heloise, Gabriel e Mike posando com Paris de fundo.', emotion: 'Memória', category: 'mike', emoji: '📸', gradient: 'from-rose-100 to-pink-100', accentColor: '#C44A72', scene: 'family-photo' },
  { id: 23, title: 'Decoração para a casa nova em Paris', price: 650, description: 'Deixando o apartamento parisiense com a cara do casal.', emotion: 'Identidade', category: 'casa', emoji: '🪴', gradient: 'from-green-100 to-sage-100', accentColor: '#7A9E7E', scene: 'couple-decor' },
  { id: 24, title: 'Escritório na casa nova', price: 2500, description: 'Espaço perfeito para o trabalho remoto do casal.', emotion: 'Produtividade', category: 'casa', emoji: '💻', gradient: 'from-slate-100 to-gray-100', accentColor: '#6B8AC4', scene: 'couple-office' },
  { id: 25, title: 'Utensílios para a casa nova', price: 550, description: 'Panelas, talheres e tudo para a cozinha francesa funcionar.', emotion: 'Lar', category: 'casa', emoji: '🍳', gradient: 'from-orange-100 to-amber-100', accentColor: '#C48A4A', scene: 'couple-market' },
  { id: 26, title: 'Looks da lua de mel', price: 397, description: 'Roupas novas para arrasar na lua de mel.', emotion: 'Estilo', category: 'experiencias', emoji: '👗', gradient: 'from-pink-100 to-rose-100', accentColor: '#C44A72', scene: 'couple-outfits' },
  { id: 27, title: '1 ano de Netflix', price: 364, description: 'Noites de filmes e séries no sofá parisiense.', emotion: 'Conforto', category: 'experiencias', emoji: '🎬', gradient: 'from-red-100 to-rose-100', accentColor: '#C44A4A', scene: 'couple-relax' },
  { id: 28, title: 'Jantar especial com vista para Torre Eiffel', price: 520, description: 'Uma noite inesquecível com a melhor vista do mundo.', emotion: 'Celebração', category: 'experiencias', emoji: '🌃', gradient: 'from-indigo-100 to-purple-100', accentColor: '#7A4AC4', scene: 'couple-dinner' },
  { id: 29, title: 'Fim de semana em outra cidade da Europa', price: 890, description: 'Explorando uma nova cidade europeia juntos.', emotion: 'Descoberta', category: 'experiencias', emoji: '🗺️', gradient: 'from-teal-100 to-cyan-100', accentColor: '#4A9CA8', scene: 'couple-travel' },
  { id: 30, title: 'Hospedagem para visitar os noivos em Paris', price: 1587, description: 'Para quando a família e amigos quiserem visitar!', emotion: 'Conexão', category: 'premium', emoji: '🏨', gradient: 'from-yellow-100 to-amber-100', accentColor: '#C9A84C', scene: 'couple-eiffel' },
  { id: 31, title: 'Patrocínio de experiências gastronômicas', price: 900, description: 'Restaurantes especiais e experiências culinárias para o casal.', emotion: 'Exclusividade', category: 'premium', emoji: '⭐', gradient: 'from-amber-100 to-yellow-100', accentColor: '#C9A84C', scene: 'couple-wine' },
  { id: 32, title: 'Presente surpresa para os noivos', price: 350, description: 'Se você ficou em dúvida entre vários presentes, esse aqui ajuda a gente a escolher na hora certa.', emotion: 'Surpresa', category: 'surpresa', emoji: '🎁', gradient: 'from-purple-100 to-violet-100', accentColor: '#9C4AC4', scene: 'couple-gift' },
]
