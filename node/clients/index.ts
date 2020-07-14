import { IOClients } from '@vtex/api'

import { GiftCardHub } from './giftCardHub'
import { GiftCardProvider } from './giftCardProvider'

export class Clients extends IOClients {
  public get giftCardHub() {
    return this.getOrSet('giftCardHub', GiftCardHub)
  }

  public get giftCardProvider() {
    return this.getOrSet('giftCardProvider', GiftCardProvider)
  }
}
