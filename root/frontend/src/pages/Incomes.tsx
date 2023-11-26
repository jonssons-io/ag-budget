import withSuspense from "../util/hoc/withSuspense";

function Incomes() {
  return <div>Incomes</div>;
}

const IncomesWithSuspense = withSuspense(Incomes);

export default IncomesWithSuspense;
