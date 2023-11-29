import { Pie, PieConfig } from "@ant-design/charts";

export type PieChartData = {
  type: string;
  value: number;
};

export default function PieChart({ data }: { data: PieChartData[] }) {
  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-50%",
      content: ({ percent, type }) => `${type} ${(percent * 100).toFixed(0)}%`,
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };

  return <Pie {...config} />;
}
