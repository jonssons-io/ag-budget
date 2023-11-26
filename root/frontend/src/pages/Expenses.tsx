import withSuspense from "../util/hoc/withSuspense";

function Expenses() {
  return <div>Expenses</div>;
}

const ExpensesWithSuspense = withSuspense(Expenses);

export default ExpensesWithSuspense;
