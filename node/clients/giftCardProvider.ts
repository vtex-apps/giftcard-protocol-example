import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export class GiftCardProvider extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    // The first argument is the base URl of your provider API endpoint
    super('baseURL', ctx, options)
  }

  public getGiftCardById(_: unknown) {
    /*
      This is the method that will be used to connect to the provider API
      and get the taxes values to be parsed later on in the orderTax handler.
      For instance, it's returning a mocked object that it's already in the format
      that VTEX expects when it's a sync request.
      It receives the request in the format that the provider expects. Replace the
      unknown with the typing of your provider
    */
    return {
      balance: 1000,
      caption: 'presente muito bom pra fabi',
      emissionDate: '2020-10-05T14:48:00.000Z',
      expiringDate: '2030-10-05T14:48:00.000Z',
      id: 'xpto2',
      provider: 'FabianaTest',
      transaction: {
        href: 'appliancetheme/giftcardproviders/FabianaTest',
      },
    }
  }

  public getListOfGiftCards(_: GiftCardRequestBody) {
    /*
      This is the method that will be used to connect to the provider API
      and get the taxes values to be parsed later on in the orderTax handler.
      For instance, it's returning a mocked object that it's already in the format
      that VTEX expects when it's a sync request.
      It receives the request in the format that the provider expects. Replace the
      unknown with the typing of your provider
    */

    return [
      {
        balance: 1000,
        caption: 'presente para fabi',
        id: 'xpto1',
        provider: 'FabianaTest',
        relationName: 'xpto1',
        totalBalance: 2000,
        _self: {
          href: 'appliancetheme/giftcardproviders/FabianaTest',
        },
      },
    ]
  }

  public createGiftCard(body: unknown) {
    /*
      This is the method that will be used to connect to the provider API
      and get the taxes values to be parsed later on in the orderTax handler.
      For instance, it's returning a mocked object that it's already in the format
      that VTEX expects when it's a sync request.
      It receives the request in the format that the provider expects. Replace the
      unknown with the typing of your provider
    */
    return body
  }
}
