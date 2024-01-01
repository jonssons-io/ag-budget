import { Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import withSuspense from "../util/hoc/withSuspense";
import { mockIncome } from "../__mock__/mockData";
import DataTable from "../components/datatable/DataTable";
import { incomeColumns } from "../components/datatable/TableColumns";

function Incomes() {
  return (
    <Flex vertical gap="middle" justify="flex-start">
      <Flex vertical={false} justify="flex-end">
        <Button type="primary" icon={<PlusOutlined />}>
          Ny inkomst
        </Button>
      </Flex>
      <DataTable
        dataSource={mockIncome}
        columns={incomeColumns(mockIncome)}
        loading={false}
      />
    </Flex>
  );
}

const IncomesWithSuspense = withSuspense(Incomes);

export default IncomesWithSuspense;
