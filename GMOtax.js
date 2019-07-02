/*
A new law has been passed that mandates a tax on genetically modified food. A certain farmer decides to increase the price of his goods by 15% in response, and wants your help on analyzing the difference. Given the farmer’s catalog of original prices and a category name, your task is to return the sum of all price increases for foods in that category after the 15% increase (round to the nearest cent).

NOTE: You are required to use at least one filter
*/

const getTaxIncrease = (foods, category) => {
  let originalSum = 0,
    newSum = 0;

  matchingFoods = foods.filter(food => food.category === category);

  matchingFoods.forEach(food => {
    originalSum += food.centsPerUnit;
    newSum += food.centsPerUnit * 1.15;
  });

  return Math.round(newSum - originalSum);
};

const foods = [
  { id: 243, name: "Rice", centsPerUnit: 20, category: "grains" },
  { id: 153, name: "Wheat", centsPerUnit: 540, category: "grains" },
  { id: 234, name: "Corn", centsPerUnit: 400, category: "vegetables" },
  { id: 634, name: "Celery", centsPerUnit: 240, category: "vegetables" },
  { id: 634, name: "Spinach", centsPerUnit: 260, category: "vegetables" },
  { id: 145, name: "Pineapple", centsPerUnit: 400, category: "fruits" },
  { id: 145, name: "Pears", centsPerUnit: 140, category: "fruits" }
];

console.log(getTaxIncrease(foods, "vegetables"));
console.log(getTaxIncrease(foods, "grains"));
