import { Income } from "../../__mock__/mockDataTypes";
import TableSorter from "../../util/tablesorter";

const getFilters = (values: string[]) => {
  return Array.from(new Set(values)).map((value) => ({
    text: value,
    value,
  }));
};

// eslint-disable-next-line import/prefer-default-export
export const incomeColumns = (dataSource: Income[]) => [
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
    filters: getFilters(dataSource.map((income) => income.occurance)),
    onFilter: (value: string, record: Income) =>
      record.occurance.indexOf(value) === 0,
  },
  {
    title: "Avsändare",
    dataIndex: "sender",
    sorter: (a: Income, b: Income) =>
      a.sender && b.sender && TableSorter.STRING(a.sender, b.sender),
    multiple: 1,
    filters: getFilters(dataSource.map((income) => income.sender ?? "")),
    onFilter: (value: string, record: Income) =>
      record.sender?.indexOf(value) === 0,
  },
  {
    title: "Kategori",
    dataIndex: "category",
    sorter: (a: Income, b: Income) =>
      TableSorter.STRING(a.category, b.category),
    multiple: 1,
    filters: getFilters(dataSource.map((income) => income.category)),
    onFilter: (value: string, record: Income) =>
      record.category.indexOf(value) === 0,
  },
];
