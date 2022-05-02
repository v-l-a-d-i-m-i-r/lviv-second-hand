const name = 'Euro Second Hand';
const regularPrices = [269, 244, 226, 174, 123, 78, 31];
const luxuryPrices = [639, 582, 521, 462, 403, 344, 269];

const shop1 = {
  id: '1650117279427',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/5YDbxdK253WeN6QM8',
  googleMapsFullLink: 'https://www.google.com/maps/place/Yevro+Sekond+Khend/@49.8268485,24.0726514,20z/data=!4m5!3m4!1s0x473ac39ae9c774bd:0xffa846a54ac50de5!8m2!3d49.8268041!4d24.0726212',
  address: 'Medovoi Pechery St, 1,',
  workingHours: [
    '09:00 - 14:00',
    '08:00 - 19:00',
    '09:00 - 19:00',
    '09:00 - 19:00',
    '09:00 - 19:00',
    '09:00 - 19:00',
    '09:00 - 17:00',
  ],
  priceMap: {
    regular: {
      prices: regularPrices,
      deliveryDate: '2022-04-05',
    },
    luxury: {
      prices: luxuryPrices,
      deliveryDate: '2022-04-06',
    },
  },
};

const shop2 = {
  id: '1651424051303',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/qz2YP1ZMGdpQZQNE7',
  googleMapsFullLink: 'https://www.google.com/maps/place/Yevro+Sekond+Khend/@49.7856173,24.0603717,15z/data=!4m5!3m4!1s0x0:0x53a51f3afeeeb075!8m2!3d49.7857245!4d24.0603678',
  address: 'Chervonoyi Kalyny Ave, 105',
  workingHours: [
    '09:00 - 19:00',
    '09:00 - 13:00',
    '09:00 - 19:00',
    '09:00 - 19:00',
    '09:00 - 19:00',
    '09:00 - 19:00',
    '09:00 - 17:00',
  ],
  priceMap: {
    regular: {
      prices: regularPrices,
      deliveryDate: '2022-05-04',
    },
    luxury: {
      prices: luxuryPrices,
      deliveryDate: '2022-05-05',
    },
  },
};

const shop3 = {
  id: '1651427188304',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/PHiNNnMNcU6EPnBt9',
  googleMapsFullLink: "https://www.google.com/maps/place/Chervonoyi+Kalyny+Ave,+109,+L'viv,+L'vivs'ka+oblast,+79000/@49.7849736,24.0590518,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae86811ff17e9:0x819c48b936969f78!8m2!3d49.7849736!4d24.0612405?shorturl=1",
  address: 'Chervonoyi Kalyny Ave, 109',
  workingHours: [
    '09:00 - 18:00',
    '09:00 - 18:00',
    '09:00 - 18:00',
    '09:00 - 18:00',
    '09:00 - 18:00',
    '09:00 - 18:00',
    '09:00 - 17:00',
  ],
  priceMap: {
    regular: {
      prices: regularPrices,
      deliveryDate: '2022-05-06',
    },
    luxury: {
      prices: luxuryPrices,
      deliveryDate: '2022-05-07',
    },
  },
};

const shop4 = {
  id: '1651427957286',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/BKzroMpkyE6cYHde6',
  googleMapsFullLink: 'https://www.google.com/maps/place/Euro+Second-hand/@49.7970509,24.0536569,15z/data=!4m5!3m4!1s0x0:0x41d6bc7cc5da6ef3!8m2!3d49.7970509!4d24.0536569',
  address: 'Chervonoyi Kalyny Ave, 59 (right)',
  workingHours: [
    '09:00 - 20:00',
    '09:00 - 20:00',
    '09:00 - 20:00',
    '09:00 - 20:00',
    '09:00 - 14:00',
    '09:00 - 20:00',
    '09:00 - 19:00',
  ],
  priceMap: {
    regular: {
      prices: regularPrices,
      deliveryDate: '2022-05-07',
    },
    luxury: {
      prices: luxuryPrices,
      deliveryDate: '2022-05-08',
    },
  },
};

const shop5 = {
  id: '1651430404378',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/BKzroMpkyE6cYHde6',
  googleMapsFullLink: 'https://www.google.com/maps/place/Euro+Second-hand/@49.7970509,24.0536569,15z/data=!4m5!3m4!1s0x0:0x41d6bc7cc5da6ef3!8m2!3d49.7970509!4d24.0536569',
  address: 'Chervonoyi Kalyny Ave, 59 (left)',
  workingHours: [
    '09:00 - 20:00',
    '09:00 - 20:00',
    '09:00 - 20:00',
    '09:00 - 20:00',
    '09:00 - 14:00',
    '09:00 - 20:00',
    '09:00 - 19:00',
  ],
  priceMap: {
    regular: {
      prices: regularPrices,
      deliveryDate: '2022-05-09',
    },
    luxury: {
      prices: luxuryPrices,
      deliveryDate: '2022-05-10',
    },
  },
};

export default [
  shop1,
  shop2,
  shop3,
  shop4,
  shop5,
];
