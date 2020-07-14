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

  if (id) {
    ctx.body = giftCardProvider.getGiftCardById(id)
  } else {
    const body = await json(ctx.req)
    ctx.body = giftCardProvider.createGiftCard(body)
  }

  ctx.status = 200
}
