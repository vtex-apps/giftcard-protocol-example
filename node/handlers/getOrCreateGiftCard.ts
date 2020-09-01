import { json } from 'co-body'

export async function getOrCreateGiftCard(ctx: Context) {
  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { id },
      },
    },
  } = ctx

  console.log('id: ', id)

  if (id) {
    console.log('GET GIFT CARD')
    ctx.body = giftCardProvider.getGiftCardById(id as string)
  } else {
    const body = await json(ctx.req)
    console.log('CREATE GIFT CARD')
    ctx.body = giftCardProvider.createGiftCard(body)
  }

  ctx.status = 200
  ctx.set('Cache-Control', 'no-cache,no-store')
}
