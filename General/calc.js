const calc = (accountSize, accounts, growthRatio, periodInDays) => {
  const DAYS_IN_WEEK = 7;
  const DAYS_IN_MONTH = 30;
  let dailyProfit;
  let wallet = 0;
  let monthlyProfit = 0;
  let monthlyProfits = [];
  let accountsAdded = 0;
  let totalAccountsAdded = 0;
  let monthlyAccountsAdded = [];

  for (let tradingDay = 1; tradingDay <= periodInDays; tradingDay++) {
    let dayOfWeek = tradingDay % DAYS_IN_WEEK; // 1 = Monday, ..., 7 = Sunday

    // Trade only on Monday (1), Wednesday (3), and Friday (5)
    if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
      dailyProfit = accountSize * growthRatio * accounts;
      wallet += dailyProfit;

      // Check if enough to add new accounts
      while (wallet >= accountSize * 2) {
        let newAccounts = Math.floor(wallet / (2 * accountSize)); // Prevent over-adding accounts
        accountsAdded += newAccounts;
        totalAccountsAdded += newAccounts;
        accounts += newAccounts;
        monthlyProfit += newAccounts * accountSize;
        wallet -= newAccounts * accountSize * 2;
      }
    }

    // Take profit at the end of each month (every 30 days)
    if (tradingDay % DAYS_IN_MONTH === 0) {
      console.log(`End of day ${tradingDay}`);
      monthlyAccountsAdded.push(accountsAdded);
      monthlyProfits.push(monthlyProfit.toFixed(2)); // Format to 2 decimal places
      accountsAdded = 0; // Reset for the next month
      monthlyProfit = 0; // Reset for the next month
    }
  }

  return {
    profits: monthlyProfits,
    accountsAdded: monthlyAccountsAdded,
    totalAccountsAdded: totalAccountsAdded,
    totalProfits: monthlyProfits.reduce((acc, val) => acc + parseFloat(val), 0).toFixed(2) // Total formatted
  };
};

// Retrieve command-line arguments
const args = process.argv.slice(2); // Skip the first two default elements
const accountSize = parseFloat(args[0]);
const accounts = parseFloat(args[1]);
const growthRatio = parseFloat(args[2]);
const periodInDays = parseFloat(args[3]);

if (isNaN(accountSize) || isNaN(accounts) || isNaN(growthRatio) || isNaN(periodInDays)) {
  console.log('Usage: node script.js <accountSize> <accounts> <growthRatio> <periodInDays>');
} else {
  const result = calc(accountSize, accounts, growthRatio, periodInDays);
  let monthCount = 1;
  for (let monthlyProfit of result.profits) {
    console.log(`
      Month #${monthCount}
        Profit In Your Pocket: ${monthlyProfit}
        Accounts Added: ${result.accountsAdded[monthCount - 1]}
    `);
    monthCount++;
  }
  
  console.log(`
    Total Profit: ${result.totalProfits}
    Total Accounts Added: ${result.totalAccountsAdded}
  `);
}
