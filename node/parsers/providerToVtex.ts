export const parseGiftCardToVtex = (
  providerResponse: unknown // replace unknown with the typing of your provider
): GiftCardResponse => {
  // Parse here your response to the expected format
  return providerResponse as GiftCardResponse
}

export const parseTransactionToVtex = (
  providerResponse: unknown // replace unknown with the typing of your provider
): TransactionResponse => {
  // Parse here your response to the expected format
  return providerResponse as TransactionResponse
}
