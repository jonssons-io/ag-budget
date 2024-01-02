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
    receiver: "Mock Company 1",
  },
  {
    budgetId: "1",
    id: "2",
    name: "Mock Expense 2",
    amount: 200,
    date: new Date(),
    occurance: "monthly",
    category: "Housing",
    receiver: "Mock Company 2",
  },
  {
    budgetId: "1",
    id: "3",
    name: "Mock Expense 3",
    amount: 300,
    date: new Date(),
    occurance: "monthly",
    category: "Housing",
    receiver: "Mock Company 3",
  },
];

export const mockIncome: Income[] = [
  {
    budgetId: "1",
    id: "1",
    name: "Lön Gabrielle",
    amount: 100,
    date: new Date("2023-12-25"),
    occurance: "monthly",
    sender: "Power Factors",
    category: "Salary",
  },
  {
    budgetId: "1",
    id: "2",
    name: "Lön Axel",
    amount: 200,
    date: new Date("2023-12-25"),
    occurance: "monthly",
    sender: "WirelessCar",
    category: "Salary",
  },
  {
    budgetId: "1",
    id: "3",
    name: "X-mas money",
    amount: 300,
    date: new Date("2023-12-24"),
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
  {
    budgetId: "1",
    id: "4",
    name: "B-day money",
    amount: 300,
    date: new Date("2024-02-08"),
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
  {
    budgetId: "1",
    id: "5",
    name: "B-day money",
    amount: 300,
    date: new Date("2024-02-08"),
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
  {
    budgetId: "1",
    id: "6",
    name: "B-day money",
    amount: 300,
    date: new Date("2024-02-08"),
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
  {
    budgetId: "1",
    id: "7",
    name: "Lön Gabrielle",
    amount: 100,
    date: new Date("2023-12-25"),
    occurance: "monthly",
    sender: "Power Factors",
    category: "Salary",
  },
  {
    budgetId: "1",
    id: "8",
    name: "Lön Axel",
    amount: 200,
    date: new Date("2023-12-25"),
    occurance: "monthly",
    sender: "WirelessCar",
    category: "Salary",
  },
  {
    budgetId: "1",
    id: "9",
    name: "X-mas money",
    amount: 300,
    date: new Date("2023-12-24"),
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
  {
    budgetId: "1",
    id: "10",
    name: "B-day money",
    amount: 300,
    date: new Date("2024-02-08"),
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
  {
    budgetId: "1",
    id: "11",
    name: "B-day money",
    amount: 300,
    date: new Date("2024-02-08"),
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
  {
    budgetId: "1",
    id: "12",
    name: "B-day money",
    amount: 300,
    date: new Date("2024-02-08"),
    occurance: "once",
    sender: "Family",
    category: "Misc",
  },
];

type BudgetCategory = {
  label: string;
  value: string;
};

export const mockExpenseCategories: BudgetCategory[] = [
  { label: "Övrigt", value: "misc" },
  { label: "Mat", value: "food" },
  { label: "Boende", value: "housing" },
  { label: "Transport", value: "transport" },
  { label: "Shopping", value: "shopping" },
];

export const mockIncomeCategories: BudgetCategory[] = [
  { label: "Övrigt", value: "misc" },
  { label: "Lön", value: "salary" },
  { label: "Försäljning", value: "sales" },
  { label: "Present", value: "gift" },
  { label: "Bidrag", value: "grant" },
];
