/*
Write an efficient function that takes stockPrices and returns the best profit I 
could have made from one purchase and one sale of one share of Apple stock yesterday.
The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

For example:

  const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)
*/

const getMaxProfit = stockPrices => {
  let low = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];
    let currentProfit = currentPrice - low;

    maxProfit = Math.max(currentProfit, maxProfit);
    low = Math.min(low, currentPrice);
  }

  return maxProfit;
};

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
console.log(getMaxProfit([4, 3, 5, 3, 10, 1]));
console.log(getMaxProfit([10, 10, 10, 10]));
console.log(getMaxProfit([10, 6, 4, 3, 2]));
