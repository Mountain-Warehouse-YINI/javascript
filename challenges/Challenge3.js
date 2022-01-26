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
    var branchSales = { key: "", value: 0 };

    let names =[];
    let total = 0;
    let total2 = 0;
   // create array of names AND ADD THEM TO ARRAY OF NAMES
    sales.forEach(element => {
        if (names.includes(element.branch))
        {
           return;
        }
        else {
            names.push(element.branch);
        }
    });
    // add totals for the arrays and add them to another
       sales.forEach(element => {
          if(element.branch == names[0]) {
               total +=  element.totalSales;
          }
          if(element.branch == names[1]) {
               total2 +=  element.totalSales;
          }
       });

   if (total > total2) {

     branchSales = { key: names[0], value: total };
   }
   else {
    branchSales = { key: names[1], value: total2 };
   }

    // // list all branch names
    // let branches = sales.map((item) => {
    //     return item.branch;
    // });
    // // compare the branch names each
    // for(let i = 0; i < branches.length; i++)
    // {
    //     let filteredItems = sales.filter((sale)=> {
    //         return sale == branches[i];
    // });

    // console.log(

    // TODO: order branchSales by value, highest first
    // TODO: return the key of the highest value
    const highestValue = branchSales.key;
    return highestValue;
}

module.exports = { CalculateBestBranch, SalesItem };