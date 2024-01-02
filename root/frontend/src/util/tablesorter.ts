const dateSorter = (a: Date, b: Date) => {
  const aDate = new Date(a);
  const bDate = new Date(b);
  return aDate.getTime() - bDate.getTime();
};
const numberSorter = (a: number, b: number) => {
  return a - b;
};
const stringSorter = (a: string, b: string) => {
  return a.localeCompare(b);
};

const TableSorter = {
  DATE: dateSorter,
  NUMBER: numberSorter,
  STRING: stringSorter,
};

export default TableSorter;
