# Technical Challenge

- given a list of bank transactions, each with a:
  - accountId (String)
  - amount (number, +ve or -ve)
  - timestamp (ISO 8601 string)

Task:
  - group transactions by accountId
  - calculate total balance for each account
  - return a list of account summaries, sorted by balance descending

Input:
const transactions = [
  { accountId: "A123", amount: 100, timestamp: "2025-07-01T10:00:00Z" },
  { accountId: "B456", amount: -50, timestamp: "2025-07-01T11:00:00Z" },
  { accountId: "A123", amount: 200, timestamp: "2025-07-02T09:00:00Z" },
  { accountId: "B456", amount: 150, timestamp: "2025-07-03T08:00:00Z" },
  { accountId: "C789", amount: 500, timestamp: "2025-07-04T10:30:00Z" },
  { accountId: "A123", amount: -75, timestamp: "2025-07-05T13:00:00Z" }
]

Expected output:
[
  { accountId: "C789", balance: 500 },
  { accountId: "A123", balance: 225 },
  { accountId: "B456", balance: 100 }
]

Reqs:
    - write a function
    - must use functional patterns where possible (eg reduce, map, sort)
    - must not mutate the input
    - use transaction and account summary types?
