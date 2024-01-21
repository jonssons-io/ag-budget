const express = require("express");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

const {
  getUserInfo,
  getAssociatedBudgets,
  getIncomes,
  getExpenses,
} = require("./db/db_client");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/api/user", ClerkExpressRequireAuth(), async (req, res) => {
  let userId = req.auth.userId;
  let userInfo = await getUserInfo(userId);
  res.send(userInfo);
});

app.get("/api/budgets", ClerkExpressRequireAuth(), async (req, res) => {
  let userId = req.auth.userId;
  let associatedBudgets = await getAssociatedBudgets(userId);
  res.send(associatedBudgets);
});

app.get(
  "/api/budgets/:id/expenses",
  ClerkExpressRequireAuth(),
  async (req, res) => {
    let userId = req.auth.userId;
    let budgetId = req.params.id;
    let expenses = await getExpenses(userId, budgetId);
    res.send(expenses);
  }
);

app.get(
  "/api/budgets/:id/incomes",
  ClerkExpressRequireAuth(),
  async (req, res) => {
    let userId = req.auth.userId;
    let budgetId = req.params.id;
    let incomes = await getIncomes(userId, budgetId);
    res.send(incomes);
  }
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
