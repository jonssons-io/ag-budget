import withSuspense from "../util/hoc/withSuspense";
import { mockIncome } from "../__mock__/mockData";
import DataTable from "../components/datatable/DataTable";
import { IncomeColumns } from "../components/datatable/TableColumns";

function Incomes() {
  return <DataTable dataSource={mockIncome} columns={IncomeColumns} />;
}

const IncomesWithSuspense = withSuspense(Incomes);

export default IncomesWithSuspense;
