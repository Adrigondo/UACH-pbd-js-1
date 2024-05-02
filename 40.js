// Sample sales data (representative, month, product, amount)
const salesData = [
    [1, 1, 1, 100],
    [1, 1, 2, 150],
    // Add more sales data...
    [3, 12, 4, 200]
];

// Initialize total sales array
const totalSales = new Array(12).fill().map(() => new Array(4).fill(0));

// Calculate total sales for each month and product
for (const sale of salesData) {
    const [representative, month, product, amount] = sale;
    totalSales[month - 1][product - 1] += amount;
}

// Print total sales information
console.log("Total Sales:");
for (let month = 0; month < 12; month++) {
    for (let product = 0; product < 4; product++) {
        console.log(`Month ${month + 1}, Product ${product + 1}: ${totalSales[month][product]}`);
    }
}
