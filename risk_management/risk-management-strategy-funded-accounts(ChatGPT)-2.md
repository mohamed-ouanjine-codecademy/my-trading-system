
# Risk Management Strategy

## Overview
You are trading with a funded account of 100k USD with a maximum allowable drawdown of 10k USD (10%). Your actual risk percentage is calculated based on the 10k USD you are allowed to trade with.

## Floors:

| Floor | Risk per Trade (Funded Account %) | Risk per Trade (Allowed to Trade %) | Losing Trades in Row | Drawdown (percent) | Total Trades | Total Drawdown (Allowed to Trade %) | Total Drawdown (Funded Account %) |
|-------|-----------------------------------|-------------------------------------|----------------------|--------------------|--------------|-------------------------------------|-----------------------------------|
| #4    | 0.3%                             | 3%                                  | 4                    | 12%                | 4            | 12%                                | 1.2%                             |
| #3    | 0.2%                             | 2%                                  | 8                    | 16%                | 12           | 28%                                | 2.8%                             |
| #2    | 0.15%                            | 1.5%                                | 12                   | 18%                | 24           | 46%                                | 4.6%                             |
| #1    | 0.1%                             | 1%                                  | 16                   | 16%                | 40           | 62%                                | 6.2%                             |
| #0    | 0.05%                            | 0.5%                                | 20                   | 10%                | 60           | 72%                                | 7.2%                             |

## Recommendations:

1. **Lower Initial Risk:**
   - Reduce the initial risk per trade to 2-3% of the allowed trading amount to prevent significant early drawdowns.

2. **Progressive Risk Reduction:**
   - Continue to reduce risk per trade after a certain number of consecutive losses.

3. **Cap Total Drawdown:**
   - Ensure the total drawdown does not exceed a certain percentage (e.g., 50-60% of the allowed trading amount) to avoid total capital loss.

## Example of Adjusted Strategy:

### Floors:
- **#4:** Risk per Trade: 3% (Allowed to Trade Amount), 0.3% (Funded Account), Losing Trades in Row: 4, Drawdown: 12% (Allowed to Trade Amount), Total Trades: 4, Total Drawdown: 12% (Allowed to Trade Amount), 1.2% (Funded Account)
- **#3:** Risk per Trade: 2% (Allowed to Trade Amount), 0.2% (Funded Account), Losing Trades in Row: 8, Drawdown: 16% (Allowed to Trade Amount), Total Trades: 12, Total Drawdown: 28% (Allowed to Trade Amount), 2.8% (Funded Account)
- **#2:** Risk per Trade: 1.5% (Allowed to Trade Amount), 0.15% (Funded Account), Losing Trades in Row: 12, Drawdown: 18% (Allowed to Trade Amount), Total Trades: 24, Total Drawdown: 46% (Allowed to Trade Amount), 4.6% (Funded Account)
- **#1:** Risk per Trade: 1% (Allowed to Trade Amount), 0.1% (Funded Account), Losing Trades in Row: 16, Drawdown: 16% (Allowed to Trade Amount), Total Trades: 40, Total Drawdown: 62% (Allowed to Trade Amount), 6.2% (Funded Account)
- **#0:** Risk per Trade: 0.5% (Allowed to Trade Amount), 0.05% (Funded Account), Losing Trades in Row: 20, Drawdown: 10% (Allowed to Trade Amount), Total Trades: 60, Total Drawdown: 72% (Allowed to Trade Amount), 7.2% (Funded Account)

## Backtesting Tips:
- **Historical Data:** Use at least 5-10 years of historical data for a robust backtest.
- **Simulate Realistic Conditions:** Include slippage, spread, and commissions to simulate real trading conditions.
- **Evaluate Performance:** Analyze key metrics like win rate, profit factor, maximum drawdown, and average return per trade.
- **Multiple Market Conditions:** Test your strategy across different market conditions to ensure robustness.
- **Sample Size:** Use a large enough sample of trades to get statistically significant results.

By following this strategy and recommendations, you can aim for better capital protection and steady growth in your trading journey. If you have any further questions or need more adjustments, feel free to ask!

