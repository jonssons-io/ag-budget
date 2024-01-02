const { sql } = require("@vercel/postgres");

const getUserInfo = async (id) => {
  return selectOne(sql`select * from budget_user where id=${id}`);
};

const getOwnedBudgets = async (id) => {
  return selectMany(sql`select * from budget where owner_id=${id}`);
};

const getAssociatedBudgets = async (userId) => {
  return selectMany(
    sql`select budget.* from budget join budget_collaborator on budget.id = budget_collaborator.budget_id where budget_collaborator.user_id=${userId}`
  );
};

const getExpenses = async (budgetId) => {
  return selectMany(sql`select * from expense where budget_id=${budgetId}`);
};

const getIncomes = async (budgetId) => {
  return selectMany(sql`select * from income where budget_id=${budgetId}`);
};

/** Wrapper functions */

const selectOne = async (query) => {
  const { rows } = await query;
  if (rows && rows.length > 0) {
    console.log("Returning data: ", rows[0]);
    return rows[0];
  }
};

const selectMany = async (query) => {
  const { rows } = await query;
  if (rows && rows.length > 0) {
    console.log("Returning data: ", rows);
    return rows;
  } else {
    return [];
  }
};

/** */

module.exports = {
  getUserInfo,
  getOwnedBudgets,
  getAssociatedBudgets,
  getExpenses,
  getIncomes,
};
