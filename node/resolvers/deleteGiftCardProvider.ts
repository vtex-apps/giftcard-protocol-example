import { AuthenticationError } from '@vtex/api'

export async function deleteGiftCardProvider(
  _: unknown,
  { id }: DeleteInput,
  ctx: Context
) {
  /*
    This resolver is responsible for deleting a gift card provider
    on an account by using GraphQL
  */

  const {
    clients: { giftCardHub },
    vtex: { adminUserAuthToken: userToken },
  } = ctx

  if (!userToken) {
    throw new AuthenticationError('No authorization provided')
  }

  return giftCardHub.deleteGiftCardById(id, userToken)
}

interface DeleteInput {
  id: string
}
