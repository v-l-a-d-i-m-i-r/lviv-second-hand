import { WorkingHours } from './constants';

const {
  F_0800_T_1900,
  F_0800_T_2000,
  F_0900_T_1400,
  F_0900_T_1700,
  F_0900_T_1800,
  F_0900_T_1900,
  F_0900_T_2000,
  F_1000_T_1400,
} = WorkingHours;

const name = 'Euro Second Hand';
const regularPrices = [269, 244, 226, 174, 123, 78, 31];
const luxuryPrices = [639, 582, 521, 462, 403, 344, 269];
const regularPricesTwoWeeks = [269, 251, 233, 215, 197, 179, 161, 143, 125, 107, 89, 71, 53, 29];

const shop1 = {
  id: '1650117279427',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/5YDbxdK253WeN6QM8',
  googleMapsFullLink: 'https://www.google.com/maps/place/Yevro+Sekond+Khend/@49.8268485,24.0726514,20z/data=!4m5!3m4!1s0x473ac39ae9c774bd:0xffa846a54ac50de5!8m2!3d49.8268041!4d24.0726212',
  address: 'Medovoi Pechery St, 1',
  workingHours: [
    F_0900_T_1400,
    F_0800_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1700,
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
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
  ],
  priceMap: {
    regular: {
      prices: regularPrices,
      deliveryDate: '2022-05-04',
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
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1700,
  ],
  priceMap: {
    regular: {
      prices: regularPricesTwoWeeks,
      deliveryDate: '2022-05-06',
    },
  },
};

const shop4 = {
  id: '1651427957286',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/BKzroMpkyE6cYHde6',
  googleMapsFullLink: 'https://www.google.com/maps/place/Euro+Second-hand/@49.7970509,24.0536569,15z/data=!4m5!3m4!1s0x0:0x41d6bc7cc5da6ef3!8m2!3d49.7970509!4d24.0536569',
  address: 'Volodymyra Vynnychenka St, 2',
  workingHours: [
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_1400,
    F_0900_T_2000,
    F_0900_T_1900,
  ],
  priceMap: {
    regular: {
      prices: regularPrices,
      deliveryDate: '2022-05-10',
    },
    luxury: {
      prices: luxuryPrices,
      deliveryDate: '2022-05-10',
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
    F_0800_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_1400,
    F_0900_T_2000,
    F_1000_T_1400,
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

const shop6 = {
  id: '1651855778853',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/TRjzNFru8Bh4wPcB7',
  googleMapsFullLink: "https://www.google.com/maps/place/Vynnychenka+2/@49.8389233,24.0334264,17z/data=!4m13!1m7!3m6!1s0x473add6c91390681:0x539e2c769a41e656!2sVolodymyra+Vynnychenka+St,+2,+L'viv,+L'vivs'ka+oblast,+79000!3b1!8m2!3d49.8423559!4d24.0357211!3m4!1s0x473addd93ff61b99:0x8d81a455ae698179!8m2!3d49.8389217!4d24.0356401",
  address: 'Chervonoyi Kalyny Ave, 59 (right)',
  workingHours: [
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
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

const shop7 = {
  id: '1652029743878',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/TRjzNFru8Bh4wPcB7',
  googleMapsFullLink: 'https://www.google.com/maps/place/Euro+second+hand/@49.8075775,23.9955939,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7bd2ffd8c6b:0x25528e37485589a2!8m2!3d49.8075585!4d23.9979474?shorturl=1',
  address: "Knyahyni Ol'hy St, 114", // 112 ??
  workingHours: [
    F_0900_T_1900,
    F_0900_T_1400,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1700,
  ],
  priceMap: {
    regular: {
      prices: regularPrices,
      deliveryDate: '2022-05-11',
    },
    luxury: {
      prices: luxuryPrices,
      deliveryDate: '2022-05-12',
    },
  },
};

const shop8 = {
  id: '1652110082840',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/zdFmiaDjKr98CrqQA',
  googleMapsFullLink: 'https://www.google.com/maps/place/Yevro+Sekond-Khend/@49.8125179,23.9714395,13z/data=!4m6!3m5!1s0x473add70343b223d:0xaae597add4d297f6!8m2!3d49.8384374!4d24.023206!15sCkTQldCy0YDQviDRgdC10LrQvtC90LQg0YXQtdC90LQsINGO0LvQuNGD0YjQsCDRgdC70L7QstCw0YbQutC-0LPQviAxNFpFIkPQtdCy0YDQviDRgdC10LrQvtC90LQg0YXQtdC90LQg0Y7Qu9C40YPRiNCwINGB0LvQvtCy0LDRhtC60L7Qs9C-IDE0kgETdXNlZF9jbG90aGluZ19zdG9yZQ?shorturl=1',
  address: "Slovats'koho St, 14",
  workingHours: [
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
    F_0900_T_1900,
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

const shop9 = {
  id: '1652115961892',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/czj5PUBuGXZhtYmR7',
  googleMapsFullLink: 'https://www.google.com/maps/place/%D0%84%D0%B2%D1%80%D0%BE+%D0%A1%D0%B5%D0%BA%D0%BE%D0%BD%D0%B4+%D0%A5%D0%B5%D0%BD%D0%B4/@49.7936475,24.0595463,17z/data=!4m5!3m4!1s0x473ae92509b61333:0xa3f06aedb8a5c460!8m2!3d49.7936475!4d24.061735',
  address: 'Sykhivska St, 13',
  workingHours: [
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
    F_0900_T_1800,
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
  shop6,
  shop7,
  shop8,
  shop9,
];
