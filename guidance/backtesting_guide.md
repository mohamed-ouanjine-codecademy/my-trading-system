
# Manual Backtesting Guide

## 1. Prepare Your Chart
- **Asset**: Choose the financial instrument you want to backtest (e.g., XAUUSD, GBPUSD).
- **Time Frame**: Select your time frame (e.g., 1-hour, daily).
- **Historical Data**: Scroll back to a past period to avoid bias from future price movements.

## 2. Strategy Setup
Define your strategy rules for the backtest. Example (Trend Following):
- **Trend Identification**: Price should be above the 200 SMMA for long trades, or below for short trades.
- **RSI Confirmation**: 
    - For long trades, RSI should be above 50.
    - For short trades, RSI should be below 50.
- **Signal**: Look for a big candle or a three-line strike pattern.
- **Stop-Loss**: Place at recent swing low (for long) or swing high (for short).
- **Take Profit**: Minimum 1:2 risk-reward ratio.

## 3. Manual Backtesting Steps
- **Scroll the Chart Forward**: Move forward bar by bar to simulate live market conditions.
- **Identify Trade Setups**: When a valid setup occurs, take note of:
    - Entry price
    - Stop-loss level
    - Take-profit level
- **Record the Trade**: Once you've identified a setup, note the details of the trade.

## 4. Trade Logging
For each trade, record the following in a spreadsheet:
- **Entry date/time**
- **Entry price**
- **Stop-loss**
- **Take-profit**
- **Exit price**
- **Profit/loss on the trade**
- **Reason for trade entry**

## 5. Review Results
After testing multiple trades:
- Calculate total number of trades.
- Count the number of winning and losing trades.
- Calculate your win/loss ratio and total profit or loss.

## 6. Analyze and Adjust
- Look for patterns where your strategy performs better or worse.
- Consider tweaking your strategy based on the performance across different market conditions.

## Tips for Effective Manual Backtesting
- **Consistency**: Always follow your strategy's rules during the backtest.
- **Objectivity**: Avoid changing the strategy mid-test based on past results.
- **Comprehensive Testing**: Backtest across different market conditions (uptrend, downtrend, sideways).
