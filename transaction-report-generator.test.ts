import {
  generateAccountSummaries,
  generateAccountSummariesv2,
} from "./transaction-report-generator";

test("Should transform the data", () => {
  // Arrange
  const transactions = [
    { accountId: "A123", amount: 100, timestamp: "2025-07-01T10:00:00Z" },
    { accountId: "B456", amount: -50, timestamp: "2025-07-01T11:00:00Z" },
    { accountId: "A123", amount: 200, timestamp: "2025-07-02T09:00:00Z" },
    { accountId: "B456", amount: 150, timestamp: "2025-07-03T08:00:00Z" },
    { accountId: "C789", amount: 500, timestamp: "2025-07-04T10:30:00Z" },
    { accountId: "A123", amount: -75, timestamp: "2025-07-05T13:00:00Z" },
    { accountId: "A123", amount: 100, timestamp: "2025-07-01T10:00:00Z" },
    { accountId: "B456", amount: -50, timestamp: "2025-07-01T11:00:00Z" },
    { accountId: "A123", amount: 200, timestamp: "2025-07-02T09:00:00Z" },
    { accountId: "B456", amount: 150, timestamp: "2025-07-03T08:00:00Z" },
    { accountId: "C789", amount: 500, timestamp: "2025-07-04T10:30:00Z" },
    { accountId: "A123", amount: -75, timestamp: "2025-07-05T13:00:00Z" },
    { accountId: "A123", amount: 100, timestamp: "2025-07-01T10:00:00Z" },
    { accountId: "B456", amount: -50, timestamp: "2025-07-01T11:00:00Z" },
    { accountId: "A123", amount: 200, timestamp: "2025-07-02T09:00:00Z" },
    { accountId: "B456", amount: 150, timestamp: "2025-07-03T08:00:00Z" },
    { accountId: "C789", amount: 500, timestamp: "2025-07-04T10:30:00Z" },
    { accountId: "A123", amount: -75, timestamp: "2025-07-05T13:00:00Z" },
  ];

  const output = [
    { accountId: "C789", balance: 1500 },
    { accountId: "A123", balance: 675 },
    { accountId: "B456", balance: 300 },
  ];

  // Act
  const result = generateAccountSummaries(transactions);
  console.log(result);

  // Assert
  expect(result).toEqual(output);
});

test("Should transform the data V2", () => {
  // Arrange
  const transactions = [
    { accountId: "A123", amount: 100, timestamp: "2025-07-01T10:00:00Z" },
    { accountId: "B456", amount: -50, timestamp: "2025-07-01T11:00:00Z" },
    { accountId: "A123", amount: 200, timestamp: "2025-07-02T09:00:00Z" },
    { accountId: "B456", amount: 150, timestamp: "2025-07-03T08:00:00Z" },
    { accountId: "C789", amount: 500, timestamp: "2025-07-04T10:30:00Z" },
    { accountId: "A123", amount: -75, timestamp: "2025-07-05T13:00:00Z" },
    { accountId: "A123", amount: 100, timestamp: "2025-07-01T10:00:00Z" },
    { accountId: "B456", amount: -50, timestamp: "2025-07-01T11:00:00Z" },
    { accountId: "A123", amount: 200, timestamp: "2025-07-02T09:00:00Z" },
    { accountId: "B456", amount: 150, timestamp: "2025-07-03T08:00:00Z" },
    { accountId: "C789", amount: 500, timestamp: "2025-07-04T10:30:00Z" },
    { accountId: "A123", amount: -75, timestamp: "2025-07-05T13:00:00Z" },
    { accountId: "A123", amount: 100, timestamp: "2025-07-01T10:00:00Z" },
    { accountId: "B456", amount: -50, timestamp: "2025-07-01T11:00:00Z" },
    { accountId: "A123", amount: 200, timestamp: "2025-07-02T09:00:00Z" },
    { accountId: "B456", amount: 150, timestamp: "2025-07-03T08:00:00Z" },
    { accountId: "C789", amount: 500, timestamp: "2025-07-04T10:30:00Z" },
    { accountId: "A123", amount: -75, timestamp: "2025-07-05T13:00:00Z" },
  ];

  const output = [
    { accountId: "C789", balance: 1500 },
    { accountId: "A123", balance: 675 },
    { accountId: "B456", balance: 300 },
  ];

  // Act
  const result = generateAccountSummariesv2(transactions);
  console.log(result);

  // Assert
  expect(result).toEqual(output);
});
