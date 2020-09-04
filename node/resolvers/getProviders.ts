import { AuthenticationError } from '@vtex/api'

export async function getGiftCardProviders(
  _: unknown,
  __: unknown,
  ctx: Context
) {
  const {
    clients: { giftCardHub },
    vtex: { adminUserAuthToken: userToken },
  } = ctx

  if (!userToken) {
    throw new AuthenticationError('No authorization provided')
  }

  return giftCardHub.getProviders(userToken)
}
