import { WorkingHours } from './constants';

const {
  F_0900_T_1800,
} = WorkingHours;

const name = 'Econom Class';
const regularPrices = [265, 221, 185, 147, 108, 64, 23];
const luxuryPrices = [649, 581, 519, 457, 395, 334, 0];
const regularPricesTwoWeeks = [265, 244, 227, 210, 193, 176, 159, 141, 123, 105, 86, 65, 46, 23];
const luxuryPricesTwoWeeks = [649, 614, 585, 559, 533, 507, 481, 455, 429, 403, 376, 347, 318, 0];

const shop1 = {
  id: '1650211155930',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/cm4cdDKK5S6ok6ej8',
  googleMapsFullLink: 'https://www.google.com/maps/place/Ekonom+Klas/@49.8359844,24.0715825,20z/data=!4m5!3m4!1s0x0:0xd9f1ae32500dd403!8m2!3d49.8360833!4d24.0716923',
  address: 'Lychakivska St, 201',
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
      prices: regularPricesTwoWeeks,
      deliveryDate: '2022-04-22',
    },
    luxury: {
      prices: luxuryPricesTwoWeeks,
      deliveryDate: '2022-04-23',
    },
  },
};

const shop2 = {
  id: '1650386686355',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/cm4cdDKK5S6ok6ej8',
  googleMapsFullLink: 'https://www.google.com/maps/place/Ekonom+Klas/@49.8446173,24.0226523,21z/data=!4m5!3m4!1s0x473addfb9c20ba27:0x80c87f55f09515cf!8m2!3d49.8446307!4d24.0227384',
  address: 'Shpytalna St, 11',
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
      prices: regularPricesTwoWeeks,
      deliveryDate: '2022-04-20',
    },
    luxury: {
      prices: luxuryPricesTwoWeeks,
      deliveryDate: '2022-04-21',
    },
  },
};

const shop3 = {
  id: '1650386686355',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/cm4cdDKK5S6ok6ej8',
  googleMapsFullLink: 'https://www.google.com/maps/place/Ekonom+Klas/@49.8446173,24.0226523,21z/data=!4m5!3m4!1s0x473addfb9c20ba27:0x80c87f55f09515cf!8m2!3d49.8446307!4d24.0227384',
  address: 'Drahana St, 4',
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
      deliveryDate: '2022-05-21',
    },
    luxury: {
      prices: luxuryPrices,
      deliveryDate: '2022-05-22',
    },
  },
};

export default [
  shop1,
  shop2,
  shop3,
];

