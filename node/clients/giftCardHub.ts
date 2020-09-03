import { InstanceOptions, IOContext, RequestTracingConfig } from '@vtex/api'

import { createTracing } from '../utils/tracing'
import VtexCommerce from './vtexCommerce'

export class GiftCardHub extends VtexCommerce {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, 'giftcardproviders', {
      ...options,
      headers: {
        ...(ctx.adminUserAuthToken
          ? {
              VtexIdclientAutCookie: ctx.adminUserAuthToken,
            }
          : {}),
      },
    })
  }

  public getProviders(userToken: string, tracingConfig?: RequestTracingConfig) {
    const metric = 'giftcardprovider-getProviders'

    return this.http.get<GiftCardProvider[]>('', {
      headers: {
        VtexIdclientAutCookie: userToken,
      },
      metric,
      tracing: createTracing(metric, tracingConfig),
    })
  }

  // eslint-disable-next-line max-params
  public createOrUpdateGiftCardProvider(
    id: string,
    body: GiftCardProvider,
    userToken: string,
    tracingConfig?: RequestTracingConfig
  ) {
    const metric = 'giftcardprovider-createOrUpdate'
    return this.http.put<GiftCardProviderResponse>(id, body, {
      headers: {
        VtexIdclientAutCookie: userToken,
      },
      metric,
      tracing: createTracing(metric, tracingConfig),
    })
  }

  public deleteGiftCardById(
    id: string,
    userToken: string,
    tracingConfig?: RequestTracingConfig
  ) {
    const metric = 'giftcardprovider-Delete'
    return this.http.delete<any>(id, {
      headers: {
        VtexIdclientAutCookie: userToken,
      },
      metric,
      tracing: createTracing(metric, tracingConfig),
    })
  }
}

interface GiftCardProvider {
  serviceUrl: string
  oauthProvider: string
  preAuthEnabled: boolean
  cancelEnabled: boolean
}

interface GiftCardProviderResponse extends GiftCardProvider {
  id: string
  caption: string
  _self: {
    href: string
  }
}
