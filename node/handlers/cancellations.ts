import { json } from 'co-body'

export async function listAllCancellations(ctx: Context) {
  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId, id },
      },
    },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.listAllCancellations(
    id as string,
    giftCardId as string
  )
}

export async function createCancellation(ctx: Context) {
  const body: CreateCancellationBody = await json(ctx.req)

  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId, id },
      },
    },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.createCancellation(
    id as string,
    giftCardId as string,
    body
  )
}
