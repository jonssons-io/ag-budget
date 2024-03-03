const { sql } = require("@vercel/postgres");

const getUserInfo = async (externalId) => {
  return selectOne(sql`select * from budget_user where id=${externalId}`);
};

const getOwnedBudgets = async (externalId) => {
  return selectMany(sql`select * from budget where owner_id=${externalId}`);
};

const getAssociatedBudgets = async (externalId) => {
  return selectMany(
    sql`select budget.* from budget join budget_collaborator on budget.id = budget_collaborator.budget_id where budget_collaborator.user_id=${externalId}`
  );
};

const createBudget = async (externalId, name) => {
  return insert(
    sql`insert into budget (owner_id, name) values (${externalId}, ${name})`
  );
};

const updateBudget = async (externalId, budgetId, name) => {
  return update(
    sql`update budget set name = ${name} where id = ${budgetId} and owner_id = ${externalId}`
  );
};

const getExpenses = async (externalId, budgetId) => {
  return selectMany(sql`select expense.* from expense 
  join budget on expense.budget_id = budget.id
  join budget_collaborator on budget.id = budget_collaborator.budget_id
  where expense.budget_id = ${budgetId} and budget_collaborator.user_id = ${externalId}`);
};

const getIncomes = async (externalId, budgetId) => {
  return selectMany(sql`select income.* from income 
  join budget on income.budget_id = budget.id
  join budget_collaborator on budget.id = budget_collaborator.budget_id
  where income.budget_id = ${budgetId} and budget_collaborator.user_id = ${externalId}`);
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

const insert = async (query) => {
  const res = await query;
  console.log("insert returned:", res);
  return res;
};

const update = async (query) => {
  const res = await query;
  console.log("update returned:", res);
  return res;
};

module.exports = {
  getUserInfo,
  getOwnedBudgets,
  getAssociatedBudgets,
  getExpenses,
  getIncomes,
  createBudget,
  updateBudget,
};
