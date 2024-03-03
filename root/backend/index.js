const express = require("express");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

const {
  getUserInfo,
  getAssociatedBudgets,
  getIncomes,
  getExpenses,
  createBudget,
  updateBudget,
} = require("./db/db_client");

const app = express();

app.use((req, res, next) => {
  const { path, method, headers, body } = req;
  const currentTime = new Date().toISOString();
  console.log(`${currentTime} ${method} ${path}`);
  console.log("Request Headers:", headers);
  if (body) {
    console.log("Request Body:", body);
  }
  next();
});

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

app.post("/api/budgets", ClerkExpressRequireAuth(), async (req, res) => {
  let userId = req.auth.userId;
  let budgetName = req.body.name;
  let budget = await createBudget(userId, budgetName);
  res.send(budget);
});

app.put("/api/budgets/:id", ClerkExpressRequireAuth(), async (req, res) => {
  let userId = req.auth.userId;
  let budgetId = req.params.id;
  let budgetName = req.body.name;
  let budget = await updateBudget(userId, budgetId, budgetName);
  res.send(budget);
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
