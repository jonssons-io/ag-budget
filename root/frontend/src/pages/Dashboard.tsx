import { Typography } from "antd";
import withSuspense from "../util/hoc/withSuspense";

const { Text } = Typography;

function Dashboard() {
  return <Text>Dashboard</Text>;
}

const DashboardWithSuspense = withSuspense(Dashboard);

export default DashboardWithSuspense;
