import { useState } from "react";
import { Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import withSuspense from "../util/hoc/withSuspense";
import { mockIncome } from "../__mock__/mockData";
import DataTable from "../components/datatable/DataTable";
import { incomeColumns } from "../components/datatable/TableColumns";
import IncomeFormModal from "../components/modals/IncomeFormModal";

function IncomesPage() {
  const [incomeModalOpen, setIncomeModalOpen] = useState(false);

  return (
    <Flex vertical gap="middle" justify="flex-start">
      <IncomeFormModal
        open={incomeModalOpen}
        closeModal={() => setIncomeModalOpen(false)}
      />
      <Flex vertical={false} justify="flex-end">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIncomeModalOpen((prev) => !prev)}
        >
          Ny inkomst
        </Button>
      </Flex>
      <DataTable
        dataSource={mockIncome}
        columns={incomeColumns(mockIncome)}
        loading={false}
      />
    </Flex>
  );
}

const IncomesPageWithSuspense = withSuspense(IncomesPage);

export default IncomesPageWithSuspense;
