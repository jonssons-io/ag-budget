import { Flex } from "antd";
import withSuspense from "../util/hoc/withSuspense";
import PieChart from "../components/charts/PieChart";
import {
  aggregatedIncomeByCategory,
  aggregatedIncomeBySender,
} from "../state/pieChartData";

function Dashboard() {
  return (
    <Flex vertical={false} justify="flex-start" wrap="wrap">
      <PieChart data={aggregatedIncomeByCategory} />
      <PieChart data={aggregatedIncomeBySender} />
    </Flex>
  );
}

const DashboardWithSuspense = withSuspense(Dashboard);

export default DashboardWithSuspense;
