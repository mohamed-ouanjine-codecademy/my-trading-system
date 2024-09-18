const calc = (accountSize, accounts, growthRatio, periodInDays) => {
  let dailyProfit;
  let wallet = 0;
  let monthlyProfit = 0;
  let monthlyProfits = [];
  let accountsAdded = 0;
  let totalAccountsAdded = 0;
  let monthlyAccountsAdded = [];

  for (let tradingDay = 1; tradingDay <= periodInDays; tradingDay++) {
    if ((tradingDay % 7 !== 6) && (tradingDay % 7 !== 0)) { // Exclude weekends (assuming 1=Monday, ..., 7=Sunday)
      dailyProfit = accountSize * growthRatio * accounts;
      wallet += dailyProfit;

      if (wallet >= (accountSize * 2)) {
        let newAccounts = Math.floor(wallet / 2 / accountSize);
        accountsAdded += newAccounts;
        totalAccountsAdded += newAccounts;
        accounts += newAccounts;
        monthlyProfit += newAccounts * accountSize;
        wallet -= newAccounts * accountSize * 2;
      }
    }
    // if you're taking profit each month (50% of the profit)
    if (tradingDay % 30 === 0) {
      console.log(`End of day ${tradingDay}`);
      monthlyAccountsAdded.push(accountsAdded);
      monthlyProfits.push(monthlyProfit);
      accountsAdded = 0;
      monthlyProfit = 0;
    }
  }

  return {
    profits: monthlyProfits,
    accountsAdded: monthlyAccountsAdded,
    totalAccountsAdded: totalAccountsAdded,
    totalProfits: monthlyProfits.reduce((acc, val) => acc + val, 0)
  };
}

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
      Month # ${monthCount}
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
