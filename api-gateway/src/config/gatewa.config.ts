export const serviceConfig = {
  users: {
    url: process.env.USERS_SERVICE_URL || 'http://localhost:3031',
    timout: 10000, //10 seconds
  },
  products: {
    url: process.env.PRODUCTS_SERVICE_URL || 'http://localhost:3032',
    timout: 10000, //10 seconds
  },
  checkout: {
    url: process.env.CHECKOUT_SERVICE_URL || 'http://localhost:3033',
    timout: 10000, //10 seconds
  },
  payments: {
    url: process.env.PAYMENTS_SERVICE_URL || 'http://localhost:3034',
    timout: 10000, //10 seconds
  },
} as const;
