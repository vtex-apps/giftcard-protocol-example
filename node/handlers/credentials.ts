export async function validateCredentials(ctx: Context, next: () => Promise<any>) {
  if (!ctx.headers['x-provider-api-appkey'] || !ctx.headers['x-provider-api-apptoken']) {
    ctx.status = 401
    ctx.body = {
      message: 'Unauthorized request',
      status: 401
    }
    return
  }

  let appSettings: Record<string, unknown>;

  try {
  const appId = process.env.VTEX_APP_ID || ctx.vtex

    appSettings = await ctx.clients.apps.getAppSettings(appId)

    if (!appSettings) {
      ctx.status = 400;
      ctx.body = {
        message: 'Empty app settings giftcard protocol configuration',
        status: 400
      }
      return
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      message: 'error loading app settings',
      status: 500
    }
    return
  }

  const { giftCardHubAppKey, giftCardHubAppToken } = appSettings

  if (ctx.headers['x-provider-api-appkey'] !== giftCardHubAppKey ||
    ctx.headers['x-provider-api-apptoken'] !== giftCardHubAppToken
  ) {
    ctx.status = 403
    ctx.body = {
      message: 'Forbidden request',
      status: 403
    }
    return
  }

  return await next()
}
