export const parseProviderToVtex = (
  providerResponse: unknown // replace unknown with the typing of your provider
): TaxResponse => {
  // Parse here your response to the expected format
  return providerResponse as TaxResponse
}
