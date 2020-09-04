import { AuthenticationError } from '@vtex/api'

export async function setGiftCardProvider(
  _: unknown,
  { id, giftCardProvInput }: SetInput,
  ctx: Context
) {
  /*
    This resolver is responsible for configuring a gift card
    provider on an account by using GraphQL
  */

  const {
    clients: { giftCardHub },
    vtex: { adminUserAuthToken: userToken },
  } = ctx

  if (!userToken) {
    throw new AuthenticationError('No authorization provided')
  }

  return giftCardHub.createOrUpdateGiftCardProvider(
    id,
    giftCardProvInput,
    userToken
  )
}

interface SetInput {
  id: string
  giftCardProvInput: GiftCardProvider
}

interface GiftCardProvider {
  serviceUrl: string
  oauthProvider: string
  preAuthEnabled: boolean
  cancelEnabled: boolean
}
