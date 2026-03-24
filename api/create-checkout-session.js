import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { items } = req.body

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Nenhum item no carrinho' })
  }

  const siteUrl = process.env.VITE_SITE_URL || `https://${req.headers.host}`

  try {
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'brl',
        product_data: {
          name: `${item.emoji} ${item.title}`,
          description: item.description,
        },
        unit_amount: Math.round(item.price * 100), // Stripe usa centavos
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${siteUrl}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancelado`,
      locale: 'pt-BR',
      custom_text: {
        submit: {
          message: 'Presenteando Heloise & Gabriel com muito amor! 💛',
        },
      },
      metadata: {
        couple: 'Heloise & Gabriel',
        total_items: items.length.toString(),
      },
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err)
    return res.status(500).json({ error: err.message || 'Erro ao processar pagamento' })
  }
}
