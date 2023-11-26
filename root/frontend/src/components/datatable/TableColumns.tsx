import { Income } from "../../__mock__/mockDataTypes";
import TableSorter from "../../util/tablesorter";

// eslint-disable-next-line import/prefer-default-export
export const IncomeColumns = [
  {
    title: "Titel",
    dataIndex: "name",
    sorter: (a: Income, b: Income) => TableSorter.STRING(a.name, b.name),
    multiple: 1,
  },
  {
    title: "Summa",
    dataIndex: "amount",
    sorter: (a: Income, b: Income) => TableSorter.NUMBER(a.amount, b.amount),
    multiple: 1,
  },
  {
    title: "Datum",
    dataIndex: "date",
    sorter: (a: Income, b: Income) => TableSorter.DATE(a.date, b.date),
    multiple: 1,
  },
  {
    title: "Förekomst",
    dataIndex: "occurance",
    sorter: (a: Income, b: Income) =>
      TableSorter.STRING(a.occurance, b.occurance),
    multiple: 1,
  },
  {
    title: "Avsändare",
    dataIndex: "sender",
    sorter: (a: Income, b: Income) =>
      a.sender && b.sender && TableSorter.STRING(a.sender, b.sender),
    multiple: 1,
  },
  {
    title: "Kategori",
    dataIndex: "category",
    sorter: (a: Income, b: Income) =>
      TableSorter.STRING(a.category, b.category),
    multiple: 1,
  },
];
