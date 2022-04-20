import React from 'react';
import { getDays } from '../../utils/date.utils';
import { classNames } from '../../utils/common.utils';
import { ShopService, ShopObject } from '../../services/shop.service';
import shops from '../../shops';

const App: React.FC = () => {
  const daysToDisplay = 14;

  const startDate = new Date();
  const dates = getDays(startDate, daysToDisplay);

  return (
    <table>
      <thead>
        <tr>
          <th className="position"> </th>
          {dates.map((date) => <td><span className="date">{date.toDateString().slice(0, -5)}</span></td>)}
        </tr>
      </thead>
      <tbody>
        {shops.map((shopObject: ShopObject) => {
          const shop = new ShopService(shopObject);

          return (
            <tr key={shop.id}>
              <td>
                <span className="name">{shop.name}</span>
                <a className="address" target="_blank" rel="noopener noreferrer" href={shop.googleMapsLink}>{shop.address}</a>
              </td>
              {dates.map((date) => {
                const shopInfoByDate = shop.getInfoByDate(date);
                const regularClassNames = classNames({
                  regular_delivery_day: shopInfoByDate.isRegularDeliveryDay,
                  regular_cheapest_day: shopInfoByDate.isRegularCheapestDay,
                });

                if (!shop.hasLuxury) {
                  return (
                    <td className={regularClassNames}>
                      <span className="working_hours">{shopInfoByDate.workingHours}</span>
                      <span className="regular_price_only">{shopInfoByDate.regularPrice}</span>
                    </td>
                  );
                }

                const luxuryClassNames = classNames({
                  luxury_delivery_day: shopInfoByDate.isLuxuryDeliveryDay,
                  luxury_cheapest_day: shopInfoByDate.isLuxuryCheapestDay,
                });

                return (
                  <td className={`${regularClassNames} ${luxuryClassNames}`}>
                    <span className="working_hours">{shopInfoByDate.workingHours}</span>
                    <span className="regular_price">{shopInfoByDate.regularPrice}</span>
                    <span className="luxury_price">{shopInfoByDate.luxuryPrice}</span>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;
