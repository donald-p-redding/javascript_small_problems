//Write a function that will return true or false depending on if a particular
//item in a data set is still available.

//The data will be a transaction log and will have a movement properity
//that will influence the overall inventory for that item
  // 'in' adds to the inventory
  //'out' will reduce the inventory by the amount

//feel free to use the inventoryFor function that we created in the last exercise.

//collect all transactions for a specific item number
// iterate over the data to determine the amount of inventory left
//based on the transaction data
  //can probably use reduce
//compare this returned value against 0 and return the evaluation

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];


function transactionsFor(itemID, data) {
  return data.filter(({id}) => id === itemID);
}

function isItemAvailable(itemID, data) {
  let currentInventory = transactionsFor(itemID, data).reduce((inventory, {movement, quantity}) => {
    inventory += movement === 'in' ? quantity : -quantity;
    return inventory;
  }, 0)

  return currentInventory > 0;
}

isItemAvailable(101, transactions);     // false
isItemAvailable(105, transactions);     // true