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

  console.log('LIST TRANSACTION')

  ctx.status = 200
  ctx.body = giftCardProvider.listTransactions(giftCardId as string)
}

export async function createTransaction(ctx: Context) {
  const body = await json(ctx.req)

  console.log('CREATE TRANSACTION')

  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId },
      },
    },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.createTransaction(giftCardId as string, body)
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

  console.log('GET TRANSACTION')

  ctx.status = 200
  ctx.body = giftCardProvider.getTransactionById(
    id as string,
    giftCardId as string
  )
}
