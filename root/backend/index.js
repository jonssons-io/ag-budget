const express = require("express");
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

app.get("/user", async (req, res) => {
  let userId = req.query.id ?? "-"; // Id should probably not be a query parameter
  let userInfo = await getUserInfo(userId);
  res.send(userInfo);
});

app.get("/budgets", async (req, res) => {
  let userId = req.query.userid ?? "-"; // Id should probably not be a query parameter
  let associatedBudgets = await getAssociatedBudgets(userId);
  res.send(associatedBudgets);
});

app.get("/budgets/:id/expenses", async (req, res) => {
  let budgetId = req.params.id;
  let expenses = await getExpenses(budgetId);
  res.send(expenses);
});

app.get("/budgets/:id/incomes", async (req, res) => {
  let budgetId = req.params.id;
  let incomes = await getIncomes(budgetId);
  res.send(incomes);
});

app.get("/test", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("OK");
});
app.post("/test", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("OK");
});
app.put("/test", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("OK");
});

app.use((req, res, next) => {
  console.log("Request: ", req);
  next();
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
