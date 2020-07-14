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

  public createOrUpdateGiftCardProvider(
    id: string,
    body: GiftCardProvider,
    tracingConfig?: RequestTracingConfig
  ) {
    const metric = 'giftcardprovider-createOrUpdate'
    return this.http.put<GiftCardProviderResponse>(id, body, {
      metric,
      tracing: createTracing(metric, tracingConfig),
    })
  }

  public deleteGiftCardById(id: string, tracingConfig?: RequestTracingConfig) {
    const metric = 'giftcardprovider-Delete'
    return this.http.delete<any>(id, {
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
  appToken: string
  appKey: string
}

interface GiftCardProviderResponse extends GiftCardProvider {
  id: string
  caption: string
  _self: {
    href: string
  }
}
