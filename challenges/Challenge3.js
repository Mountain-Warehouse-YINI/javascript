class SalesItem {
    constructor(branch, totalSales, date) {
        this.branch = branch;
        this.totalSales = totalSales;
        this.date = date;
    }
}
/// <summary>
/// It has been a busy year at mountain warehouse, having made lots of sales.
/// Management would like to know which branch made the most in revenue.
/// For this challenge you will be given an array of sales broken down by Branch and Date.  
/// You will need to sum all branch across multiple days and identify which branch had the highest sales overall
/// Assume that there is only one branch with the highest total
/// We have provided some starting code but if you know of a better method then go ahead with that
/// </summary>
/// <param name="sales">The array of sales items (class SalesItem, see above declaration)</param>
/// <returns>The branch with the best performing sales</returns>
function CalculateBestBranch(sales) {

    let branchSales = { key: "", value: 0 };
    let branchSale = {};

    sales.forEach((sale) =>
    {
        //check if the object has a property for the name
      if (branchSale.hasOwnProperty(sale.branch)) 
      {
          //add value of the object to the existing value
        branchSale[sale.branch] = branchSale[sale.branch] + sale.totalSales;
      } 
      else 
      {
          // set object to the value
        branchSale[sale.branch] = sale.totalSales;
      }
    });
    // once branch object completed, run loop and add to array
    let branchObjects = [];
    for (let bs in branchSale) {
      branchObjects.push({ key: bs, value: branchSale[bs] });
    }
    // creating a leader list, by determining highest by sorting descending
   let leaderList = branchObjects.sort((a, b) => {
       return parseFloat(b.value) - parseFloat(a.value);
    })
    // setting the winner 
    branchSales.key = leaderList[0].key;
    branchSales.value = leaderList[0].value;

    // TODO: order branchSales by value, highest first
    // TODO: return the key of the highest value
    const highestValue = branchSales.key;
    return highestValue;
}

module.exports = { CalculateBestBranch, SalesItem };