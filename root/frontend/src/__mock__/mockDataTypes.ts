export type User = {
  id: string;
  name: string;
  email: string;
};

export type Budget = {
  id: string;
  name: string;
  owner: User["id"];
  collaborators: User[];
  expenses: Expense[];
  income: Income[];
};

export type Occurance =
  | "once"
  | "daily"
  | "weekly"
  | "biweekly"
  | "monthly"
  | "yearly";

export type Expense = {
  budgetId: Budget["id"];
  id: string;
  name: string;
  amount: number;
  date: Date;
  occurance: Occurance;
  category: string;
  receiver?: string;
};

export type Income = {
  budgetId: Budget["id"];
  id: string;
  name: string;
  amount: number;
  date: Date;
  occurance: Occurance;
  sender?: string;
  category: string;
};
