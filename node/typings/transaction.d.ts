interface TransactionRequest {
  operation: string
  value: number
  descrption: string
  redemptionToken: string
  redemptionCode: string
  requestId: string
  orderInfo: OrderInfo
  paymentRelatedSellerInfo: PaymentRelatedSellerInfo
}

interface TransactionResponse {
  cardId: string
  id: string
  _self: {
    href: string
  }
}

interface Transaction {
  value: number
  description: string
  redemptionCode: string
  date: string
  requestId: string
  orderInfo: OrderInfo
  settlement: {
    _href: string
  }
  cancellation: {
    _href: string
  }
  authorization: {
    _href: string
  }
  operation: string
}

interface PaymentRelatedSellerInfo {
  seller: string
  sellerOrderId: string
  sellerOrderId: string
  sellerSequence: string
  value: number
}

interface OrderInfo {
  orderId: string
  sequence: string
  cart: Cart
  clientProfile: Client
  shipping: string
}

interface AuthorizationInfo {
  oid: string
  value: number
  date: string
}

interface CancellationInfo {
  oid: string
  value: number
  date: string
}

interface SettlementInfo {
  oid: string
  value: number
  date: string
}
