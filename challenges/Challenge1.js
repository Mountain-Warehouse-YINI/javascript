
/// <summary>
/// Receives an amount and returns the total amount including tax.
/// </summary>
/// <param name="nonTaxAmount">The total cost of goods without tax.</param>
/// <param name="taxRate">The tax rate to be applied. 50% = 0.5</param>
/// <returns>Returns the price including tax.</returns>
function Add_Tax(nonTaxAmount, taxRate) {

 let totalAmount;
  if (taxRate == 0) {
    totalAmount = nonTaxAmount;
  }

  totalAmount = nonTaxAmount + (nonTaxAmount * taxRate);
  return totalAmount;
}

/// <summary>
/// Takes in the current price and returns the price after discount has been deducted.
/// If the discount value is not valid then this method should return -1
/// </summary>
/// <param name="currentPrice">The current price of the product.</param>
/// <param name="discount">The percentage off of the rrp to be applied. E.g. 10% = 0.1</param>
/// <returns>Returns the price after discount.</returns>
function Discount(currentPrice, discount) {

  if (discount<= 0) {
    return -1;
  }

  return currentPrice - (currentPrice * discount);
}

/// <summary>
/// Calculate the total price where two items are part of a "Buy One Get One Half Price" promotion.
/// </summary>
/// <param name="item1">The first item </param>
/// <param name="item2">The second item</param>
/// <returns>Returns total value of goods</returns>
function Buy_One_Get_One_Half_Price(item1, item2) {
  if(item1 < item2){
    return (item1 / 2) + item2;
  }
  else {
    return (item2 / 2) + item1;
  }
  
  
}

/// <summary>
/// Calculates the sum of items within an array.
/// </summary>
/// <param name="amounts">An array of numbers</param>
/// <returns>Returns total value of goods</returns>
function Calculate_Total_Cost(amounts) {
  // use reduce function as code wasnot working
   return amounts.reduce((a, b) => a + b);
}
//   let totalsum = 0;
//  // let length = amounts.length;
//   for(let i = 0; i < amounts.length; i++){


//     return totalsum += amounts[i]; 
//   }


module.exports = { Add_Tax, Discount, Buy_One_Get_One_Half_Price, Calculate_Total_Cost };
