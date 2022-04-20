import { getDifferenceInDays } from '../utils/date.utils';

export type ShopObject = {
  id: string,
  name: string,
  address: string,
  googleMapsShortLink: string;
  workingHours: string[],
  priceMap: {
    regular: {
      prices: number[],
      deliveryDate: string,
    },
    luxury?: {
      prices: number[],
      deliveryDate: string,
    }
  }
};

type ShopInfoByDay = {
  workingHours: string;
  regularPrice: number;
  isRegularDeliveryDay: boolean;
  isRegularCheapestDay: boolean;
  luxuryPrice?: number;
  isLuxuryDeliveryDay?: boolean;
  isLuxuryCheapestDay?: boolean;
};

export class ShopService {
  id: ShopObject['id'];
  name: ShopObject['name'];
  address: ShopObject['address'];
  hasLuxury: boolean;
  workingHours: ShopObject['workingHours'];
  googleMapsLink: ShopObject['googleMapsShortLink'];
  private priceMap: ShopObject['priceMap'];

  constructor(shopObject: ShopObject) {
    this.id = shopObject.id;
    this.name = shopObject.name;
    this.address = shopObject.address;
    this.priceMap = shopObject.priceMap;
    this.hasLuxury = Boolean(shopObject.priceMap.luxury);
    this.workingHours = shopObject.workingHours;
    this.googleMapsLink = shopObject.googleMapsShortLink;
  }

  // eslint-disable-next-line class-methods-use-this
  private getPriceByDate(priceMapObject: ShopObject['priceMap']['regular'] | ShopObject['priceMap']['luxury'], date: Date): number {
    const { prices, deliveryDate } = priceMapObject;
    const differenceInDays = getDifferenceInDays(date, new Date(deliveryDate));

    return prices[(differenceInDays >= 0 ? differenceInDays : prices.length + differenceInDays) % prices.length];
  }

  getInfoByDate(date: Date): ShopInfoByDay {
    const { regular, luxury } = this.priceMap;

    const dayOfWeek = date.getDay();
    const regularPrice = this.getPriceByDate(regular, date);
    const isRegularDeliveryDay = regularPrice === regular.prices[0];
    const isRegularCheapestDay = regularPrice === regular.prices[regular.prices.length - 1];
    const workingHours = dayOfWeek === 0 ? this.workingHours[6] : this.workingHours[dayOfWeek - 1];

    const result = { regularPrice, isRegularDeliveryDay, isRegularCheapestDay, workingHours };

    if (this.hasLuxury) {
      const luxuryPrice = this.getPriceByDate(luxury, date);
      const isLuxuryDeliveryDay = luxuryPrice === luxury.prices[0];
      const isLuxuryCheapestDay = luxuryPrice === luxury.prices[luxury.prices.length - 1];

      Object.assign(result, { luxuryPrice, isLuxuryDeliveryDay, isLuxuryCheapestDay });
    }

    return result;
  }
}
