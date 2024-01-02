import { useState } from "react";
import { useAtom } from "jotai";
import { DatePicker, Form, Input, InputNumber, Modal, Select } from "antd";
import { RecurranceEnum } from "../../util/types/IncomeTypes";
import {
  MinLength,
  NoWhitespace,
  RequiredField,
} from "../../util/formvalidation/FormValidation";
import { messageSettingsAtom } from "../../state/atoms";
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
  sender: string;
  category: string;
}

interface IncomeFormProps {
  open: boolean;
  closeModal: () => void;
}

export default function IncomeFormModal({ open, closeModal }: IncomeFormProps) {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageSettings, setMessageSettings] = useAtom(messageSettingsAtom);

  const submitIncome = (values: FormFields) => {
    // CALL API TO ADD INCOME, trigger fetch to update table if successful
    console.log(values);
    throw new Error("Not implemented");
  };
  // DO WE NEED THIS??
  const onFinish = (values: FormFields) => {
    // on successful submit
    closeModal();
    setMessageSettings({
      ...messageSettings,
      key: "addIncome",
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
        key: "addIncome",
        type: "error",
        content: `Oj, något gick fel. Error: ${errorInfo.message}`,
        duration: 5,
      });
    } else {
      setMessageSettings({
        ...messageSettings,
        key: "addIncome",
        type: "warning",
        content: `Kunde inte lägga till ${
          errorInfo.values.name === "" ? "inkomsten" : errorInfo.values.name
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
      key: "addIncome",
      type: "loading",
      content: "Lägger till inkomst...",
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
        submitIncome(formValues);
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
      title="Lägg till ny inkomst"
      okText="Lägg till"
      cancelText="Avbryt"
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      onOk={onOk}
    >
      <Form
        form={form}
        name="AddIncome"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true, modifier: "public" }}
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
          tooltip="Ange ett namn för inkomsten. Exempelvis 'Lön Pia' eller 'Barnbidrag Theo'."
        >
          <Input placeholder="Ange ett namn för inkomsten inkomsten" />
        </Form.Item>
        <Form.Item<FormFields>
          label="Summa"
          name="amount"
          rules={[RequiredField()]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Ange summa för inkomsten. Exempelvis '15000'. Använd punkt som decimalavskiljare."
        >
          <InputNumber placeholder="123" min={0} />
        </Form.Item>
        <Form.Item<FormFields>
          label="Datum"
          name="date"
          rules={[
            {
              required: true,
              message: "Vänligen ange vilket datum inkomsten beräknas.",
            },
          ]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Välj vilket datum inkomsten beräknas. Detta datum används för att beräkna budgeten, tillsammans med 'Förekomst'."
        >
          <DatePicker placeholder="Välj datum" />
        </Form.Item>
        <Form.Item<FormFields>
          label="Förekomst"
          name="occurance"
          rules={[{ required: false }]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Välj hur ofta inkomsten förekommer. Exempelvis 'En gång' eller 'Varje månad'. Om inget anges antas inkomsten förekomma en gång."
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
          label="Avsändare"
          name="sender"
          rules={[RequiredField(), MinLength(3), NoWhitespace()]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Vem betalar ut inkomsten? Exempelvis 'Arbetsgivare' eller 'Försäkringskassa'."
        >
          <Input placeholder="Ange var inkomsten kommer ifrån" />
        </Form.Item>
        <Form.Item<FormFields>
          label="Kategori"
          name="category"
          rules={[MinLength(2), NoWhitespace()]}
          hasFeedback
          validateDebounce={1000}
          tooltip="Välj en kategori som passar inkomsten, exempelvis 'Lön' eller 'Bidrag'. Okategoriserade inkomster hamnar i kategorin 'Övrigt'."
        >
          <Input placeholder="Välj en kategori för inkomsten." />
        </Form.Item>
      </Form>
    </Modal>
  );
}
