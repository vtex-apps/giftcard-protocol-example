import {
  ClientsConfig,
  method,
  ParamsContext,
  RecorderState,
  Service,
  ServiceContext,
} from '@vtex/api'

import { Clients } from './clients/index'
import {
  createCancellation,
  listAllCancellations,
} from './handlers/cancellations'
import { getOrCreateGiftCard } from './handlers/getOrCreateGiftCard'
import { listGiftCards } from './handlers/listGiftCards'
import { settings } from './handlers/settings'
import { createSettlement, listAllSettlements } from './handlers/settlements'
import { getTransactionAuthorization } from './handlers/transactionAuthorization'
import {
  createTransaction,
  getTransactionById,
  listTransactions,
} from './handlers/transactions'

const TIMEOUT_MS = 800

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// It's possible to check the implementation of each handler in the handlers folder
export default new Service<Clients, RecorderState, ParamsContext>({
  clients,
  routes: {
    authorization: method({
      GET: [getTransactionAuthorization],
    }),
    cancellation: method({
      GET: [listAllCancellations],
      POST: [createCancellation],
    }),
    create: method({
      POST: [getOrCreateGiftCard],
    }),
    get: method({
      GET: [getOrCreateGiftCard],
    }),
    getTransaction: method({
      GET: [getTransactionById],
    }),
    list: method({
      POST: [listGiftCards],
    }),
    settings,
    settlement: method({
      GET: [listAllSettlements],
      POST: [createSettlement],
    }),
    transactions: method({
      GET: [listTransactions],
      POST: [createTransaction],
    }),
  },
})
