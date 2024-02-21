
/// <summary>
/// Receives an amount and returns the total amount including tax.
/// </summary>
/// <param name="nonTaxAmount">The total cost of goods without tax.</param>
/// <param name="taxRate">The tax rate to be applied. 50% = 0.5</param>
/// <returns>Returns the price including tax.</returns>
function Add_Tax(nonTaxAmount, taxRate) {
  if (taxRate>1) {
    throw new Error('Tax rate must be less than 1');
  }

  const totalAmount = nonTaxAmount + (taxRate * nonTaxAmount);
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
  if (!discount || discount < 0 || discount >= 1) {
    return -1;
  }

  return currentPrice - (currentPrice*discount);
}

/// <summary>
/// Calculate the total price where two items are part of a "Buy One Get One Half Price" promotion.
/// </summary>
/// <param name="item1">The first item </param>
/// <param name="item2">The second item</param>
/// <returns>Returns total value of goods</returns>
function Buy_One_Get_One_Half_Price(item1, item2) {
  if (item1 < 0 || item2 < 0) {
    return -1;
  }

  if (item1 == item2) {
    return item1 + item2*0.5
  }
  
  if (item1 < item2) {
    return item1*0.5 + item2
  }

  if (item2 < item1) {
    return item2*0.5 + item1
  }

}

/// <summary>
/// Calculates the sum of items within an array.
/// </summary>
/// <param name="amounts">An array of numbers</param>
/// <returns>Returns total value of goods</returns>
function Calculate_Total_Cost(amounts) {
  if (!amounts || amounts.length === 0) {
    return 0;
  }
  return sum = amounts.reduce((sum, amount) => sum + amount, 0);
}

module.exports = { Add_Tax, Discount, Buy_One_Get_One_Half_Price, Calculate_Total_Cost };
