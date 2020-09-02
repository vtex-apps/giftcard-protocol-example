

# [WIP] Gift Card Protocol Example

> **Attention**: This is a work in progress repository

A reference app implementing a VTEX IO Gift Card integration service.

## Uses
This app is an example to be followed in order to develop a gift card service integration with VTEX. 

## Clients
In this example, there are a few clients implemented for you to use.
- `GiftCardHub`: used to connect to the Gift Card Hub to configure or delete a provider on an account;
- `GiftCardProvider`: used to connect to the provider's external API, where it must have methods implemented to handle all the request that the Gift Card Hub might make;
- `VtexCommerce`: basic external client that can be used as the class that can be inherited to develop other clients that connectes to VTEX API. 

## Parsers
As a way to simplify the logic behind the handlers that are implemented in this example, all the code logic that can be necessary to parse the payloads to a specific format is expected to be implemented inside `parsers` directory. This is necessary because both the external provider API and VTEX API expect specific payload formats. Inside the folder, there are two files, `providerToVtex.ts` and `vtexToProvider.ts`.

### VTEX to Provider

### Provider to VTEX

## GraphQL queries and mutations

### Using GraphiQL to configure the gift card provider on an account

## Routes

## Testing the app
