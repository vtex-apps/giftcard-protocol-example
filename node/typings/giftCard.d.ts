interface GiftCardListResponse {
  id: string
  provider: string
  balance: number
  totalBalance?: number
  relationName?: string
  caption?: string
  groupName: string
  _self: {
    href: string
  }
}

interface GiftCardResponse {
  id: string
  redemptionToken?: string
  balance: number
  relationname?: string
  emissionDate: string
  expiringDate: string
  caption?: string
  provider: string
  discount?: boolean
  groupName?: string
  transaction: {
    _href: string
  }
}

interface GiftCardRequest {
  relationName: string
  expiringDate: string
  caption: string
  redemptionCode: string
  profileId: string
  multipleRedemptions?: boolean
  restrictedToOwner?: boolean
  multipleCredits?: boolean
}

interface GiftCardListRequest {
  client: Client
  cart: Cart
}

interface Client {
  id: string
  email: string
  document: string
}

interface Cart {
  grandTotal: number
  relationName: string | null
  redemptionCode: string
  discount: number
  shipping: number
  taxes: number
  items: Item[]
  itemsTotal: number
}

interface Item {
  productId: string
  id: string
  refId: string
  name: string | null
  price: number
  quantity: number
}
