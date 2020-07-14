interface TaxResponse {
  itemTaxResponse: ItemTaxResponse[]
  hooks: Hook[]
}

interface ItemTaxResponse {
  id: string
  taxes: Tax[]
}

interface Tax {
  name: string
  value: number
}

interface Hook {
  major: number
  url: string
}
