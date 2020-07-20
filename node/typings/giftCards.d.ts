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

interface GiftCardGetByIdResponse {
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

interface GiftCardRequestBody {
  cart: Cart
  client: Client
}

interface Cart {
  id: string
  grandTotal: number
  relationName: string
  redemptionCode: string
  discounts: number
  shipping: number
  taxes: number
  items: Item[]
  payments: Payment[]
  sc: string
  itemsTotal: number
  shippingData: ShippingData
}

interface Client {
  id: string
  email: string
  name: string
  ip: string
  userAgent: string
  document: string
  documentType: string
  corporateName: string
  tradeName: string
  corporateDocument: string
}

interface Item {
  productId: string
  id: string
  refId: string
  name: string
  price: number
  sellingPrice: number
  sellerId: string
  quantity: BigInteger
  totalShippingDiscount: number
  totalDiscount: number
  // components: {
  //   item: Item
  // }
  sellerChain: string[]
}

interface Payment {
  paymentSystem: string
  name: string
  referenceValue: number
  value: number
  bin: string
  lastDigits: string
}

interface ShippingData {
  receiverName: string
  postalCode: string
  city: string
  state: string
  country: string
  street: string
  number: string
  neighborhood: string
  complement: string
  reference: string
}
