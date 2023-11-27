/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";

export default function DataTable({
  dataSource,
  columns,
  loading,
}: {
  dataSource: any[];
  columns: any[];
  loading: boolean;
}) {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="id"
      loading={loading}
    />
  );
}
