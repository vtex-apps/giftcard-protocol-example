import { json } from 'co-body'

export async function listTransactions(ctx: Context) {
  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId },
      },
    },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.listTransactions(giftCardId)
}

export async function createTransaction(ctx: Context) {
  const body = await json(ctx.req)

  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId },
      },
    },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.createTransaction(giftCardId, body)
}

export async function getTransactionById(ctx: Context) {
  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId, id },
      },
    },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.getTransactionById(id, giftCardId)
}
