import { AuthenticationError } from '@vtex/api'

export async function setGiftCardProvider(
  _: unknown,
  { id, body }: SetInput,
  ctx: Context
) {
  /*
    This resolver is responsible for activating or deactivating the
    tax service on the order form configuration by using GraphQL
  */

  const {
    clients: { giftCardHub },
    vtex: { adminUserAuthToken: userToken },
  } = ctx

  if (!userToken) {
    throw new AuthenticationError('No authorization provided')
  }

  giftCardHub.createOrUpdateGiftCardProvider(id, body, userToken)
}

interface SetInput {
  id: string
  body: GiftCardProvider
}

interface GiftCardProvider {
  serviceUrl: string
  oauthProvider: string
  preAuthEnabled: boolean
  cancelEnabled: boolean
  appToken: string
  appKey: string
}
