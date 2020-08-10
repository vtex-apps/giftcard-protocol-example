export async function getTransactionAuthorization(ctx: Context) {
  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId, id },
      },
    },
  } = ctx

  console.log('GET TRANSACTION AUTHORIZATION')

  ctx.status = 200
  ctx.body = giftCardProvider.getTransactionAuthorization(
    id as string,
    giftCardId as string
  )
}
