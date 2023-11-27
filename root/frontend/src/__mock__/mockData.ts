import { Budget, Expense, Income, User } from "./mockDataTypes";

export const mockBudget: Budget = {
  id: "1",
  name: "Mock Budget",
  owner: "1",
  collaborators: [],
  expenses: [],
  income: [],
};

export const mockUser: User = {
  id: "1",
  name: "Mock User",
  email: "mockuser@gmail.com",
};

export const mockExpenses: Expense[] = [
  {
    budgetId: "1",
    id: "1",
    name: "Mock Expense 1",
    amount: 100,
    date: new Date(),
    occurance: "once",
    category: "Shopping",
    company: "Mock Company 1",
  },
  {
    budgetId: "1",
    id: "2",
    name: "Mock Expense 2",
    amount: 200,
    date: new Date(),
    occurance: "monthly",
    category: "Housing",
    company: "Mock Company 2",
  },
  {
    budgetId: "1",
    id: "3",
    name: "Mock Expense 3",
    amount: 300,
    date: new Date(),
    occurance: "monthly",
    category: "Housing",
    company: "Mock Company 3",
  },
];

export const mockIncome: Income[] = [
  {
    budgetId: "1",
    id: "1",
    name: "Lön Gabrielle",
    amount: 100,
    date: "2023-12-25",
    occurance: "monthly",
    sender: "Power Factors",
    category: "Salary",
  },
  {
    budgetId: "1",
    id: "2",
    name: "Lön Axel",
    amount: 200,
    date: "2023-12-25",
    occurance: "monthly",
    sender: "WirelessCar",
    category: "Salary",
  },
  {
    budgetId: "1",
    id: "3",
    name: "X-mas money",
    amount: 300,
    date: "2023-12-24",
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
  {
    budgetId: "1",
    id: "4",
    name: "B-day money",
    amount: 300,
    date: "2024-02-08",
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
];