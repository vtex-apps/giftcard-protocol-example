

# Tax Protocol Example

A reference app implementing a VTEX IO Tax Protocol service.

## Uses
This app is an example to be followed in order to develop a tax service integration with VTEX. 

## Clients
In this example, there are a few clients implemented for you to use.
- `Checkout`: used to configure the tax service in the Checkout
- `Logistics`: it has a single method that can be used to fetch information about docks.
- `TaxProvider`: used to connect with the provider's external API.
- `VtexCommerce`: basic external client that can be used as the class that can be inherited to develop other clients that connectes to VTEX API. 

## Parsers
As a way to simplify the logic behind the handlers that are implemented in this example, all the code logic that can be necessary to parse the payloads to a specific format is expected to be implemented inside `parsers` directory. This is necessary because both the external provider API and VTEX API expect specific payload formats. Inside the folder, there are two files, `providerToVtex.ts` and `vtexToProvider.ts`.

### VTEX to Provider
The provider API will receive a HTTP post request with a well-defined body from the checkout. In case of it expecting a different format, one can implement the loginc inside `vtexToProvider` function. 

An example of the body sent in the checkout post request is:
```json
{
  "items":
  [
    {
      "id":"0",
      "sku":"1",
      "itemPrice":10,
      "discountPrice": null,
      "dockId": "1",
      "freightPrice": 12
    }
  ],
  "clientData": {
    "email": "afonso.praca@vtex.com.br"
  },
  "shippingDestination":
  {
    "country":"USA",
    "state":"IL",
    "city":"Chicago",
    "neighborhood":"North Water St",
    "street": "4931 E North Water St",
    "postalCode": "60621"
  },
  "orderFormId":"4ab546272a9b4087b56f62f6438f20aa"
}
```

### Provider to VTEX
Considering the request done by the provider to the VTEX Checkout API, it's also possible to implement a parser in order to put the payload in the format that the checkout expects. One can find an example of the expected format:

```json
{
    "itemTaxResponse": [
			{
		    "id": "0",
		    "taxes": [
		      {
		        "name": "TAX 1",
		        "description": "",
		        "value": 3.48
		      },
		      {
		        "name": "TAX 2",
		        "description": "",
		        "value": 22
		      }
		    ]
		  }
		],
    "hooks": [
        {
          "major": 1,
          "url": "https://master--bufferin.myvtex.com/app/tax-provider/oms/invoice"
        }
    ]
}
```

## Routes
There are three main routes in this example and they are mainly using mocked values so as to simulate their functions.

It is important to emphasize that for the first two endpoints to work, you **must** have the tax service configured in your account, which can be done by using the third endpoint explained below.

- `taxSimulation`: responsible for simulating a Checkout request for tax calculation.
- `orderInvoice`: public route to send the taxes.
- `settings`: a private route that is responsible for configurating a tax service in a specific account. 
  > It expects to receive an operation name, which can be `activate` or `deactivate`.

If you want to test your those routes, it is possible to use this [Postman collection](https://www.getpostman.com/collections/debecab7831841489998).

> **Attention!** The authorization header that it's present in the Postman collection is a mocked value to be correctly validated by the handlers. This value is defined in the `utils/constants.ts` file and it's used to configure the tax service when calling the `settings` endpoint.
