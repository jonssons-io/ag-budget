import { Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import withSuspense from "../util/hoc/withSuspense";
import { mockIncome } from "../__mock__/mockData";
import DataTable from "../components/datatable/DataTable";
import { incomeColumns } from "../components/datatable/TableColumns";
import PieChart, { PieChartData } from "../components/charts/PieChart";

const aggregatedIncomeByCategory: PieChartData[] = mockIncome.reduce(
  (acc: PieChartData[], curr) => {
    const index = acc.findIndex(
      (item: PieChartData) => item.type === curr.category,
    );
    if (index === -1) {
      acc.push({ type: curr.category, value: curr.amount });
    } else {
      acc[index].value += curr.amount;
    }
    return acc;
  },
  [],
);

const aggregatedIncomeBySender: PieChartData[] = mockIncome.reduce(
  (acc: PieChartData[], curr) => {
    const index = acc.findIndex(
      (item: PieChartData) => item.type === curr.sender,
    );
    if (index === -1) {
      acc.push({
        type: curr.sender ? curr.sender : "Okänd",
        value: curr.amount,
      });
    } else {
      acc[index].value += curr.amount;
    }
    return acc;
  },
  [],
);

function Incomes() {
  return (
    <Flex vertical gap="large" justify="flex-end">
      <Flex vertical={false} justify="flex-start" wrap="wrap">
        <PieChart data={aggregatedIncomeByCategory} />
        <PieChart data={aggregatedIncomeBySender} />
      </Flex>
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
    </Flex>
  );
}

const IncomesWithSuspense = withSuspense(Incomes);

export default IncomesWithSuspense;
