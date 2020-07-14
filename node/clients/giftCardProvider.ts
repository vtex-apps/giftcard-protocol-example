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
    return [
      {
        cancelEnabled: true,
        id: 'VtexGiftCard',
        oauthProvider: 'vtex',
        preAuthEnabled: true,
        _self: {
          href: 'demostore/giftcardproviders/VtexGiftCard',
        },
        serviceUrl: 'http://api.vtex.com/demostore',
      },
    ]
  }

  public getListOfGiftCards() {
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
        cancelEnabled: true,
        id: 'VtexGiftCard',
        oauthProvider: 'vtex',
        preAuthEnabled: true,
        _self: {
          href: 'demostore/giftcardproviders/VtexGiftCard',
        },
        serviceUrl: 'http://api.vtex.com/demostore',
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
