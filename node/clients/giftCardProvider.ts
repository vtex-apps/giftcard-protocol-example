import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export class GiftCardProvider extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    // The first argument is the base URl of your provider API endpoint
    super('baseURL', ctx, options)
  }

  public getGiftCardById(id: string) {
    /*
      This is the method that will be used to connect to the provider API
      and get a specific gift card by its id.
      For instance, it's returning a mocked object that it's already in the format
      that VTEX expects.
      It receives the request in the format that the provider expects. Replace the
      unknown with the typing of your provider
    */

    console.log(id)
    return {
      balance: 100000,
      caption: 'gift card by id',
      emissionDate: '2020-07-05T14:48:00.000Z',
      expiringDate: '2030-10-10T14:48:00.000Z',
      id: 'xpto1',
      provider: 'FabianaTest',
      transaction: {
        href: 'appliancetheme/giftcardproviders/FabianaTest',
      },
    }
  }

  public getListOfGiftCards(_: GiftCardRequestBody) {
    /*
      This is the method that will be used to connect to the provider API
      and get a list of available gift cards.
      For instance, it's returning a mocked object that it's already in the format
      that VTEX expects.
      It receives the request in the format that the provider expects. Replace the
      unknown with the typing of your provider
    */

    return [
      {
        balance: 100000,
        caption: 'gift card by id',
        emissionDate: '2020-07-05T14:48:00.000Z',
        expiringDate: '2030-10-10T14:48:00.000Z',
        id: 'xpto1',
        provider: 'FabianaTest',
        transaction: {
          href: 'appliancetheme/giftcardproviders/FabianaTest',
        },
      }
    ]
  }

  public createGiftCard(body: unknown) {
    /*
      This is the method that will be used to connect to the provider API
      and create a gift card. It needs to create the gift card and return a body
      response in the format that VTEX expects.
    */
    return body
  }

  public createTransaction(_: string, __: TransactionRequest) {
    /*
      This is the method that will be used to connect to the provider API
      and create a gift card. It needs to create the gift card and return a body
      response in the format that VTEX expects.
    */
    return {
      cardId: 'abc',
      id: '01010101',
      _self: {
        href: 'appliancetheme/giftcardproviders/FabianaTest',
      },
    }
  }

  public listTransactions(_: string) {
    /*
      This is the method that will be used to connect to the provider API
      and create a gift card. It needs to create the gift card and return a body
      response in the format that VTEX expects.
    */
    return []
  }

  public getTransactionById(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction by its id.
      The parameter is the id.
    */
    return {}
  }

  public getTransactionAuthorization(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction authorization by its id.
      The parameters are the transaction id and the gift card id.
    */
    return {}
  }

  public createCancellation(
    _: string,
    __: string,
    ___: { value: number; requestId: string }
  ) {
    /*
      Method that handlers the case of creating a transaction cancellation.
      The parameters are the value and the request id.
    */
    return {}
  }

  public listAllCancellations(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction authorization by its id.
      The parameter is the id.
    */
    return {}
  }

  public createSettlement(
    _: string,
    __: string,
    ___: { value: number; requestId: string }
  ) {
    /*
      Method that handlers the case of creating a transaction settlement.
      The parameters are the value and the request id.
    */
    return {}
  }

  public listAllSettlements(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction authorization by its id.
      The parameter is the id.
    */
    return {}
  }
}
