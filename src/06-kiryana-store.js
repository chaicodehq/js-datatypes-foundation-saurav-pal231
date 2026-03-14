/**
 * 🏪 Kiryana Store Bill - Array Transform
 *
 * Gupta ji ki kiryana (grocery) store hai. Monthly hisaab kitaab karna hai —
 * items ka total nikalna, sorting karna, bill format karna.
 * Array transform methods se Gupta ji ki dukaan digital banao!
 *
 * Data format: items = [
 *   { name: "Atta", price: 40, qty: 2 },
 *   { name: "Daal", price: 80, qty: 1 },
 *   ...
 * ]
 *
 * Methods to explore: .map(), .filter(), .reduce(), .sort(), .join()
 *
 * Functions:
 *
 *   1. getItemNames(items)
 *      - .map() se sirf names nikalo
 *      - Agar items array nahi hai, return []
 *      - Example: getItemNames([{name:"Atta",price:40,qty:2}]) => ["Atta"]
 *
 *   2. getAffordableItems(items, maxPrice)
 *      - .filter() se items nikalo jinka price <= maxPrice
 *      - Agar items array nahi hai ya maxPrice number nahi hai, return []
 *      - Example: getAffordableItems([{name:"Atta",price:40},{name:"Ghee",price:500}], 100)
 *                 => [{name:"Atta",price:40}]
 *
 *   3. calculateTotal(items)
 *      - .reduce() se (price * qty) ka sum nikalo
 *      - Agar items array nahi hai ya empty hai, return 0
 *      - Example: calculateTotal([{name:"Atta",price:40,qty:2},{name:"Daal",price:80,qty:1}])
 *                 => 160
 *
 *   4. sortByPrice(items, ascending)
 *      - [...items].sort() se NEW sorted array return karo (original mat badlo!)
 *      - ascending = true => low to high, false => high to low
 *      - Agar items array nahi hai, return []
 *      - Example: sortByPrice([{name:"Ghee",price:500},{name:"Atta",price:40}], true)
 *                 => [{name:"Atta",price:40},{name:"Ghee",price:500}]
 *
 *   5. formatBill(items)
 *      - .map() se har item ko "name x qty = Rs.total" format karo
 *      - Phir .join("\n") se multi-line bill banao
 *      - Agar items array nahi hai ya empty hai, return ""
 *      - Example: formatBill([{name:"Atta",price:40,qty:2}]) => "Atta x 2 = Rs.80"
 *
 * @example
 *   getItemNames([{name:"Atta",...}])         // => ["Atta"]
 *   calculateTotal([{price:40,qty:2},...])    // => 160
 *   formatBill([{name:"Atta",price:40,qty:2}]) // => "Atta x 2 = Rs.80"
 */
export function getItemNames(items) {
  // Your code here
  if (Array.isArray(items) === false) return [];
  const allNames = items.map((item) => item.name)
  return allNames;
}

export function getAffordableItems(items, maxPrice) {
  // Your code here
  if (Array.isArray(items) === false || typeof maxPrice !== "number") return [];
  const affordableItems = items.filter((item) => item.price <= maxPrice);
  return affordableItems;
}

export function calculateTotal(items) {
  // Your code here
  if (Array.isArray(items) === false || items.length == 0) return 0;
  const initialValue = 0;
  const totalPrice = items.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.price*currentValue.qty),
    initialValue,
  );
  return totalPrice;
}

export function sortByPrice(items, ascending) {
  // Your code here
  if (Array.isArray(items) === false) return [];
  const sortedAsc = [...items].sort((a,b) => a.price-b.price);
  const sortedDsc = [...items].sort((a,b) => b.price-a.price);
  if (ascending === true) return sortedAsc;
  return sortedDsc;
}

export function formatBill(items) {
  // Your code here
  if (Array.isArray(items) === false) return "";
  const bill = items.map((item) => `${item.name} x ${item.qty} = Rs.${(item.price)*(item.qty)}`);
  const totalBill = bill.join("\n");
  return totalBill;
}
