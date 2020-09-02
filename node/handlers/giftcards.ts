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
    ctx.body = giftCardProvider.getGiftCardById(id as string)
  } else {
    const body = await json(ctx.req)
    ctx.body = giftCardProvider.createGiftCard(body)
  }

  ctx.status = 200
  ctx.set('Cache-Control', 'no-cache,no-store')
}

export async function listGiftCards(ctx: Context) {
  const body = await json(ctx.req)

  const {
    clients: { giftCardProvider },
  } = ctx

  ctx.status = 200
  ctx.set('Cache-Control', 'no-cache,no-store')
  ctx.body = giftCardProvider.getListOfGiftCards(body)
}
