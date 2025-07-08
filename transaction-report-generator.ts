type Transaction = {
  accountId: string;
  amount: number;
  timestamp: string;
};

type AccountSummary = {
  accountId: string;
  balance: number;
};

const transactions = [
  { accountId: "A123", amount: 100, timestamp: "2025-07-01T10:00:00Z" },
  { accountId: "B456", amount: -50, timestamp: "2025-07-01T11:00:00Z" },
  { accountId: "A123", amount: 200, timestamp: "2025-07-02T09:00:00Z" },
  { accountId: "B456", amount: 150, timestamp: "2025-07-03T08:00:00Z" },
  { accountId: "C789", amount: 500, timestamp: "2025-07-04T10:30:00Z" },
  { accountId: "A123", amount: -75, timestamp: "2025-07-05T13:00:00Z" },
];

const accountSummaryList: AccountSummary[] = [];

const sortBalanceDescending = ([]) =>
  accountSummaryList.sort((account1, account2) => {
    return account2.balance - account1.balance;
  });

export function generateAccountSummaries(
  transactions: Transaction[]
): AccountSummary[] {
  for (let i = 0; i < transactions.length; i++) {
    var match = accountSummaryList.find(
      (accountSummary) => accountSummary.accountId === transactions[i].accountId
    );
    if (match) {
      //if accountId of transaction IS already present in accountSummaryList: update balance
      accountSummaryList.forEach((item) => {
        if (item.accountId === transactions[i].accountId) {
          item.balance = item.balance + transactions[i].amount;
        }
      });
    } else {
      //if accountId of transaction is not already present in accountSummaryList
      //push accountId of transaction into accountSummaryList
      var newAccountSummary = {
        accountId: transactions[i].accountId,
        balance: transactions[i].amount,
      };
      accountSummaryList.push(newAccountSummary);
    }
  }

  return sortBalanceDescending(accountSummaryList);
}

export function generateAccountSummariesv2(
  transactions: Transaction[]
): AccountSummary[] {
  const accountSummaryLookup: Record<string, AccountSummary> = {};

  for (let i = 0; i < transactions.length; i++) {
    var trans = transactions[i];

    if (accountSummaryLookup[trans.accountId]) {
      accountSummaryLookup[trans.accountId].balance =
        accountSummaryLookup[trans.accountId].balance + trans.amount;
    } else {
      accountSummaryLookup[trans.accountId] = {
        accountId: trans.accountId,
        balance: trans.amount,
      };
    }
  }
  return sortBalanceDescending(Array.from(accountSummaryList));
}
