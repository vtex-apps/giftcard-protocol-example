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
import { getOrCreateGiftCard, listGiftCards } from './handlers/giftcards'
import { createSettlement, listAllSettlements } from './handlers/settlements'
import {
  createTransaction,
  getTransactionAuthorization,
  getTransactionById,
  listTransactions,
} from './handlers/transactions'
import { deleteGiftCardProvider } from './resolvers/deleteGiftCardProvider'
import { getGiftCardProviders } from './resolvers/getProviders'
import { setGiftCardProvider } from './resolvers/setGiftCardProvider'
import { validateCredentials } from './handlers/credentials'

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
  graphql: {
    resolvers: {
      Mutation: {
        deleteGiftCardProvider,
        setGiftCardProvider,
      },
      Query: {
        getGiftCardProviders,
      },
    },
  },
  routes: {
    authorization: method({
      GET: [validateCredentials, getTransactionAuthorization],
    }),
    cancellation: method({
      GET: [validateCredentials, listAllCancellations],
      POST: [validateCredentials, createCancellation],
    }),
    create: method({
      POST: [validateCredentials, getOrCreateGiftCard],
    }),
    get: method({
      GET: [validateCredentials, getOrCreateGiftCard],
    }),
    getTransaction: method({
      GET: [validateCredentials, getTransactionById],
    }),
    list: method({
      POST: [validateCredentials, listGiftCards],
    }),
    settlement: method({
      GET: [validateCredentials, listAllSettlements],
      POST: [validateCredentials, createSettlement],
    }),
    transactions: method({
      GET: [validateCredentials, listTransactions],
      POST: [validateCredentials, createTransaction],
    }),
  },
})
