import { Typography } from "antd";
import withSuspense from "../util/hoc/withSuspense";

const { Text } = Typography;

function Expenses() {
  return <Text>Expenses</Text>;
}

const ExpensesWithSuspense = withSuspense(Expenses);

export default ExpensesWithSuspense;
