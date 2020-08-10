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

  console.log('LIST ALL SETTLEMENTS')

  ctx.status = 200
  ctx.body = giftCardProvider.listAllSettlements(
    id as string,
    giftCardId as string
  )
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

  console.log('CREATE SETTLEMENT')

  ctx.status = 200
  ctx.body = giftCardProvider.createSettlement(
    id as string,
    giftCardId as string,
    body
  )
}
