import { AuthenticationError } from '@vtex/api'

export async function deleteGiftCardProvider(
  _: unknown,
  { id }: DeleteInput,
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

  giftCardHub.deleteGiftCardById(id, userToken)
}

interface DeleteInput {
  id: string
}
