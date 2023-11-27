import withSuspense from "../util/hoc/withSuspense";
import { mockIncome } from "../__mock__/mockData";
import DataTable from "../components/datatable/DataTable";
import { incomeColumns } from "../components/datatable/TableColumns";

function Incomes() {
  return (
    <DataTable
      dataSource={mockIncome}
      columns={incomeColumns(mockIncome)}
      loading={false}
    />
  );
}

const IncomesWithSuspense = withSuspense(Incomes);

export default IncomesWithSuspense;
