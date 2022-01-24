class SalesItem {
    constructor(branch, totalSales, date) {
        this.branch = branch;
        this.totalSales = totalSales;
        this.date = date
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
    var branchSales = { key: "", value: 0 };

    // Implement your code here
    throw new NotImplementedException();

    // TODO: order branchSales by value, highest first
    // TODO: return the key of the highest value
    const highestValue = 0;
    return highestValue;
}

module.exports = { CalculateBestBranch, SalesItem };