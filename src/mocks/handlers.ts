import { rest } from "msw";

const apiUrl = process.env.REACT_APP_URL_MOCK;

const handlers = [
  rest.get(`${apiUrl}products/loadAll`, async (request, response, context) => {
    return response.once(
      context.status(200),
      context.json({
        productsList: [
          {
            name: "USB SamDisk 2.0 64GB",
            price: "10.99€",
            id: "12345",
            quantity: 2,
            image: "usb.jpg",
          },
        ],
      })
    );
  }),
  rest.get(`${apiUrl}products/loadAll`, async (request, response, context) => {
    return response.once(context.status(500));
  }),
  rest.patch(
    `${apiUrl}products/checkout`,
    async (request, response, context) => {
      return response.once(context.status(200));
    }
  ),

  rest.patch(
    `${apiUrl}products/checkout`,
    async (request, response, context) => {
      return response.once(context.status(500));
    }
  ),

  rest.get(
    `${apiUrl}admin/pending-orders`,
    async (request, response, context) => {
      return response.once(
        context.status(200),
        context.json({
          username: "admin",
          password: "admin",
          id: "admin",
          pendingOrders: [
            {
              name: "USB SamDisk 2.0 64GB",
              price: "10.99€",
              id: "12345",
              quantity: 2,
              image: "usb.jpg",
            },
          ],
          finishedOrders: [],
        })
      );
    }
  ),

  rest.get(
    `${apiUrl}admin/pending-orders`,
    async (request, response, context) => {
      return response.once(context.status(500));
    }
  ),

  rest.post(`${apiUrl}admin/login`, async (request, response, context) => {
    return response(context.status(200));
  }),
  rest.post(`${apiUrl}admin/login`, async (request, response, context) => {
    return response.once(context.status(500));
  }),

  rest.patch(
    `${apiUrl}admin/accept-order/USB`,
    async (request, response, context) => {
      return response(context.status(200));
    }
  ),
  rest.patch(
    `${apiUrl}admin/accept-order/USB`,
    async (request, response, context) => {
      return response.once(context.status(500));
    }
  ),

  rest.patch(
    `${apiUrl}admin/cancel-order/USB`,
    async (request, response, context) => {
      return response(context.status(200));
    }
  ),
  rest.patch(
    `${apiUrl}admin/cancel-order/USB`,
    async (request, response, context) => {
      return response.once(context.status(500));
    }
  ),
];

export default handlers;
