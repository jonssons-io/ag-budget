import { useState } from "react";
import { Flex, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import withSuspense from "../util/hoc/withSuspense";
import { mockExpenses } from "../__mock__/mockData";
import DataTable from "../components/datatable/DataTable";
import { expenseColumns } from "../components/datatable/TableColumns";
import ExpenseFormModal from "../components/modals/ExpenseFormModal";

function ExpensesPage() {
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);
  return (
    <Flex vertical gap="middle" justify="flex-start">
      <ExpenseFormModal
        open={expenseModalOpen}
        closeModal={() => setExpenseModalOpen(false)}
      />
      <Flex vertical={false} justify="flex-end">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setExpenseModalOpen((prev) => !prev)}
        >
          Ny utgift
        </Button>
      </Flex>
      <DataTable
        dataSource={mockExpenses}
        columns={expenseColumns(mockExpenses)}
        loading={false}
      />
    </Flex>
  );
}

const ExpensesPageWithSuspense = withSuspense(ExpensesPage);

export default ExpensesPageWithSuspense;
