import { mockIncome } from "../__mock__/mockData";
import { PieChartData } from "../components/charts/PieChart";

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

export { aggregatedIncomeByCategory, aggregatedIncomeBySender };
