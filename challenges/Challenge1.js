
/// <summary>
/// Receives an amount and returns the total amount including tax.
/// </summary>
/// <param name="nonTaxAmount">The total cost of goods without tax.</param>
/// <param name="taxRate">The tax rate to be applied. 50% = 0.5</param>
/// <returns>Returns the price including tax.</returns>
function Add_Tax(nonTaxAmount, taxRate) {
  throw new NotImplementedException();
}

/// <summary>
/// Takes in the current price and returns the price after discount has been deducted.
/// If the discount value is not valid then this method should return -1
/// </summary>
/// <param name="currentPrice">The current price of the product.</param>
/// <param name="discount">The percentage off of the rrp to be applied. E.g. 10% = 0.1</param>
/// <returns>Returns the price after discount.</returns>
function Discount(currentPrice, discount) {
  throw new NotImplementedException();
}

/// <summary>
/// Calculate the total price where two items are part of a "Buy One Get One Half Price" promotion.
/// </summary>
/// <param name="item1">The first item </param>
/// <param name="item2">The second item</param>
/// <returns>Returns total value of goods</returns>
function Buy_One_Get_One_Half_Price(item1, item2) {
  throw new NotImplementedException();
}

/// <summary>
/// Calculates the sum of items within an array.
/// </summary>
/// <param name="amounts">An array of numbers</param>
/// <returns>Returns total value of goods</returns>
function Calculate_Total_Cost(amounts) {
  throw new NotImplementedException();
}

module.exports = { Add_Tax, Discount, Buy_One_Get_One_Half_Price, Calculate_Total_Cost };
