import { json } from 'co-body'

export async function settings(ctx: Context) {
  const body = await json(ctx.req)

  const {
    clients: { giftCardHub },
    vtex: {
      route: {
        params: { operation },
      },
    },
  } = ctx

  if (operation === 'add') {
    await giftCardHub.createOrUpdateGiftCardProvider(body?.id, body)
  } else if (operation === 'delete') {
    await giftCardHub.deleteGiftCardById(body?.id)
  } else {
    ctx.status = 400
  }
  ctx.status = 200
  ctx.body = 'Gift card provider configuration has been changed'
}
