import { useState } from "react";
import { useAtom } from "jotai";
import { DatePicker, Form, Input, InputNumber, Modal, Select } from "antd";
import { RecurranceEnum } from "../../util/types/BudgetTypes";
import {
  MinLength,
  NoWhitespace,
  RequiredField,
} from "../../util/formvalidation/FormValidation";
import { messageSettingsAtom } from "../../state/atoms";
import { mockExpenseCategories } from "../../__mock__/mockData";
// TODO: Hook up to API/DB
type SubmitFailedType = {
  errorFields: {
    name: (string | number)[];
    errors: string[];
  }[];
  outOfDate: boolean;
  values: FormFields;
};

interface FormFields {
  name: string;
  amount: number;
  date: Date;
  occurance: string;
  receiver: string;
  category: string;
}

interface ExpenseFormProps {
  open: boolean;
  closeModal: () => void;
}

export default function ExpenseFormModal({
  open,
  closeModal,
}: ExpenseFormProps) {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageSettings, setMessageSettings] = useAtom(messageSettingsAtom);

  const submitExpense = (values: FormFields) => {
    // CALL API TO ADD Expense, trigger fetch to update table if successful
    console.log(values);
    throw new Error("Not implemented");
  };
  // DO WE NEED THIS??
  const onFinish = (values: FormFields) => {
    // on successful submit
    closeModal();
    setMessageSettings({
      ...messageSettings,
      key: "addExpense",
      type: "success",
      content: `${values.name} har lagts till.`,
      duration: 5,
    });
  };

  // DO WE NEED THIS??
  const onFinishFailed = (errorInfo: Error | SubmitFailedType) => {
    if (errorInfo instanceof Error) {
      setMessageSettings({
        ...messageSettings,
        key: "addExpense",
        type: "error",
        content: `Oj, något gick fel. Error: ${errorInfo.message}`,
        duration: 5,
      });
    } else {
      setMessageSettings({
        ...messageSettings,
        key: "addExpense",
        type: "warning",
        content: `Kunde inte lägga till ${
          errorInfo.values.name === "" ? "utgiften" : errorInfo.values.name
        }.\n
        Det finns fel i formuläret, felaktiga fält är markerade med rött.`,
        duration: 0,
      });
    }
    // on failed submit
    console.log("Failed:", errorInfo);
  };

  const onCancel = () => {
    // on cancel
    form.resetFields();
    closeModal();
  };

  const onOk = () => {
    setConfirmLoading(true);
    setMessageSettings({
      ...messageSettings,
      key: "addExpense",
      type: "loading",
      content: "Lägger till utgift...",
      duration: 0,
    });
    form
      .validateFields()
      .then((values) => {
        const formValues = {
          ...values,
          date: values.date.toISOString(),
        };
        // onCreate should be adding to the db
        submitExpense(formValues);
        setTimeout(() => {
          // when onCreate is successful -> On finish, else On finish failed
          onFinish(formValues);
          form.resetFields();
          setConfirmLoading(false);
        }, 5000);
      })
      .catch((info) => {
        setConfirmLoading(false);
        onFinishFailed(info);
      });
  };

  return (
    <Modal
      open={open}
      title="Lägg till ny utgift"
      okText="Lägg till"
      cancelText="Avbryt"
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form
        form={form}
        name="AddExpense"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true, occurance: "once", category: "misc" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FormFields>
          label="Titel"
          name="name"
          rules={[RequiredField(), MinLength(3), NoWhitespace()]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Ange ett namn för utgiften. Exempelvis 'Mobilabonnemang' eller 'Barnomsorg'."
        >
          <Input placeholder="Ange ett namn för utgiften" />
        </Form.Item>
        <Form.Item<FormFields>
          label="Summa"
          name="amount"
          rules={[RequiredField()]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Ange summa för utgiften. Exempelvis '15000'. Använd punkt som decimalavskiljare."
        >
          <InputNumber placeholder="123" min={0} />
        </Form.Item>
        <Form.Item<FormFields>
          label="Datum"
          name="date"
          rules={[
            {
              required: true,
              message: "Vänligen ange vilket datum utgiften ska betalas.",
            },
          ]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Välj vilket datum utgiften ska betalas. Detta datum används för att beräkna budgeten, tillsammans med 'Förekomst'."
        >
          <DatePicker placeholder="Välj datum" />
        </Form.Item>
        <Form.Item<FormFields>
          label="Förekomst"
          name="occurance"
          rules={[{ required: false }]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Välj hur ofta utgiften förekommer. Exempelvis 'En gång' eller 'Varje månad'."
        >
          <Select
            placeholder="Ange förekomst, t.ex. 'En gång', 'Månadsvis' eller 'Årsvis'."
            options={Object.entries(RecurranceEnum).map(([key, value]) => ({
              label: value,
              value: key,
            }))}
          />
        </Form.Item>
        <Form.Item<FormFields>
          label="Mottagare"
          name="receiver"
          rules={[RequiredField(), MinLength(3), NoWhitespace()]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Till vem sker betalning? Exempelvis 'Förskola' eller 'Telia'."
        >
          <Input placeholder="Ange vem betalningen sker till." />
        </Form.Item>
        <Form.Item<FormFields>
          label="Kategori"
          name="category"
          rules={[MinLength(2), NoWhitespace()]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Välj en kategori att lägga utgiften i, exempelvis 'Boende' eller 'Abonnemang'."
        >
          <Select
            placeholder="Välj en kategori för utgiften."
            options={mockExpenseCategories.map((category) => ({
              label: category.label,
              value: category.value,
            }))}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
