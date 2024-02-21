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
    let branchTotalSales = {};

    sales.forEach(sale => {
        branchTotalSales[sale.branch] = (branchTotalSales[sale.branch] || 0) + sale.totalSales;
    });
    

    var bestBranch = { key: "", value: 0 };
    for (var branch in branchTotalSales) {
        if (branchTotalSales[branch] > bestBranch.value) {
            bestBranch.key = branch;
            bestBranch.value = branchTotalSales[branch];
        }
    }

    return bestBranch.key;
}

module.exports = { CalculateBestBranch, SalesItem };