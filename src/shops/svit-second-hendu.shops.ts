import { WorkingHours } from './constants';

const {
  F_0900_T_2000,
  F_1000_T_1800,
  F_1000_T_1900,
} = WorkingHours;

const name = 'Світ Секонд-хенду';
// const regularPrices = [269, 244, 226, 174, 123, 78, 31];
const regularPricesTwoWeeks = [265, 247, 229, 212, 193, 175, 157, 142, 128, 115, 99, 72, 48, 27];

const shop1 = {
  id: '1650387565320',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/hwHNJvMPFSWExH8z8',
  googleMapsFullLink: 'https://www.google.com/maps/place/Svit+Sekond-Khendu/@49.827978,24.0710699,21z/data=!4m5!3m4!1s0x473ac2b2558ccb7d:0xb858cee31d5b8689!8m2!3d49.8277417!4d24.071521',
  address: 'Pasichna St, 51',
  workingHours: [
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_1000_T_1800,
  ],
  priceMap: {
    regular: {
      prices: regularPricesTwoWeeks,
      deliveryDate: '2022-04-27',
    },
  },
};

const shop2 = {
  id: '1650389141818',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/BJfUJZdc1FQUeThq9',
  googleMapsFullLink: 'https://www.google.com/maps/place/Svit+Sekond-Khendu/@49.8491052,24.0219209,17z/data=!3m1!4b1!4m5!3m4!1s0x473add4b6cf37825:0xb9cbe5d73771fd7c!8m2!3d49.8491556!4d24.024111',
  address: 'Tsekhova St, 1',
  workingHours: [ // need to correct working hours
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_1000_T_1900,
  ],
  priceMap: {
    regular: {
      prices: regularPricesTwoWeeks,
      deliveryDate: '2022-04-15',
    },
  },
};

const shop3 = {
  id: '1652720760869',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/ZJPRHubRTLkQSXmY6',
  googleMapsFullLink: 'https://www.google.com/maps/place/Svit+Sekond-Khendu/@49.8340937,24.0002348,17z/data=!3m1!4b1!4m5!3m4!1s0x473add357645cb87:0x83c193f66f753ad9!8m2!3d49.8341233!4d24.0024956?shorturl=1',
  address: 'Lypneva Square, 6',
  workingHours: [
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_1000_T_1800,
  ],
  priceMap: {
    regular: {
      prices: regularPricesTwoWeeks,
      deliveryDate: '2022-05-05',
    },
  },
};

const shop4 = {
  id: '1652721571781',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/EL4W1FNXoq76YQMS6',
  googleMapsFullLink: 'https://www.google.com/maps/place/Svit+Sekond-Khendu/@49.8042192,23.9849678,17z/data=!4m5!3m4!1s0x473ae7423df25fa9:0x69426567de67db0!8m2!3d49.8041428!4d23.9870534?shorturl=1',
  address: 'Naukova St, 51',
  workingHours: [
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_1000_T_1800,
  ],
  priceMap: {
    regular: {
      prices: regularPricesTwoWeeks,
      deliveryDate: '2022-05-05',
    },
  },
};

const shop5 = {
  id: '1652722182501',
  name,
  googleMapsShortLink: 'https://goo.gl/maps/GQLjZrJKPvpfSSxQA',
  googleMapsFullLink: "https://www.google.com/maps/place/The+world's+second+hand/@49.804854,23.9908804,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7a3592c1429:0xcc5310c978a3e47c!8m2!3d49.804854!4d23.9930691",
  address: 'Naukova St, 64a',
  workingHours: [
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_0900_T_2000,
    F_1000_T_1800,
  ],
  priceMap: {
    regular: {
      prices: regularPricesTwoWeeks,
      deliveryDate: '2022-04-29',
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
