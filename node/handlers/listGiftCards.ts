import { json } from 'co-body'

export async function listGiftCards(ctx: Context) {
  const body = await json(ctx.req)

  const {
    clients: { giftCardProvider },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.getListOfGiftCards(body)
}
