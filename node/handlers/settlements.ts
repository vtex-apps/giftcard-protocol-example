import { json } from 'co-body'

export async function listAllSettlements(ctx: Context) {
  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId, id },
      },
    },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.listAllSettlements(id, giftCardId)
}

export async function createSettlement(ctx: Context) {
  const body = await json(ctx.req)

  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId, id },
      },
    },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.createSettlement(id, giftCardId, body)
}
