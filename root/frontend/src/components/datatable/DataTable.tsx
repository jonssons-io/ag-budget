/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";

export default function DataTable({
  dataSource,
  columns,
}: {
  dataSource: any[];
  columns: any[];
}) {
  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
}
