export async function listGiftCards(ctx: Context) {
  const {
    clients: { giftCardProvider },
  } = ctx

  ctx.status = 200
  ctx.body = giftCardProvider.getListOfGiftCards()
}
