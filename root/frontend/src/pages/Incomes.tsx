import { Typography } from "antd";
import withSuspense from "../util/hoc/withSuspense";

const { Text } = Typography;

function Incomes() {
  return <Text>Incomes</Text>;
}

const IncomesWithSuspense = withSuspense(Incomes);

export default IncomesWithSuspense;
