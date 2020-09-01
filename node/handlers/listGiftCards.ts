import { json } from 'co-body'

export async function listGiftCards(ctx: Context) {
  const body = await json(ctx.req)

  const {
    clients: { giftCardProvider },
  } = ctx

  console.log('LIST GIFT CARDS')

  ctx.status = 200
  ctx.set('Cache-Control', 'no-cache,no-store')
  ctx.body = giftCardProvider.getListOfGiftCards(body)
}
