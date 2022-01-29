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
    let branchSales = { key: "", value: 0 };
    let branch = {};

    // loop through every sale
    sales.forEach(element => {
        // check if object has name present
        if (element.hasOwnProperty(element.branch))
        {
            // if so sum the value
            branch[element.branch] = branch[element.branch] + element.totalSales;
        }
        else
        {
            // just declare the value in object
            branch[element.branch] = element.totalSales;
        }
    });

    // once branch created, add to array of branches
    let branches = [];
    
    for (let prop in branch) 
    {
        branches.push({ name: prop, value: branch[prop]});
    }
    
    // sort branches into a leaderboard
    let leaderboard = branches.sort((a, b) => {
      return parseFloat(b.value) - parseFloat(a.value);
    });
    console.log(leaderboard);

    // declare the winner
    branchSales.key = leaderboard[0].name;
    branchSales.value = leaderboard[0].value;
    

    // TODO: order branchSales by value, highest first
    // TODO: return the key of the highest value
    const highestValue = branchSales.key;
    return highestValue;
}

module.exports = { CalculateBestBranch, SalesItem };