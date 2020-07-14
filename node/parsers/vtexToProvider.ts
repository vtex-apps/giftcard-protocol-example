export const parseVtexToProvider = (checkoutRequest: CheckoutRequest) => {
  // Parse here the checkout request to the expected format
  return checkoutRequest
}

interface CheckoutRequest {
  items: Item[]
  clientData: Client
  shippingDestination: ShippingInformation
  orderFormId: string
}

interface Item {
  id: string
  sku: string
  itemPrice: number
  discountPrice: number | null
  dockId: string
  freightPrice: number
}

interface Client {
  email: string
}

interface ShippingInformation {
  country: string
  state: string
  city: string
  neighborhood: string
  street: string
  postalCode: string
}
