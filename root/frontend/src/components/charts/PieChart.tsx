import { Pie, PieConfig } from "@ant-design/charts";

export type PieChartData = {
  type: string;
  value: number;
};

const substringLongLabel = (label: string) => {
  if (label.length <= 9) return label;
  return `${label.substring(0, 7)}...`;
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
      content: ({ percent, type }: { percent: number; type: string }) =>
        `${substringLongLabel(type)} ${(percent * 100).toFixed(0)}%`,
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };

  return <Pie {...config} />;
}
