"use client";

import { Dispatch, SetStateAction } from "react";
import DateInput from "./DateInput";

type Props = {
  from: string;
  to: string;
  setDateRange: Dispatch<
    SetStateAction<{
      from: string;
      to: string;
    }>
  >;
};
export default function DateRangePicker({ from, to, setDateRange }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const selectedDate = new Date(value);
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const isInvalidFromTo =
      name === "from"
        ? selectedDate >= toDate
        : selectedDate <= fromDate || selectedDate.getFullYear() > 1972;

    if (isInvalidFromTo) {
      alert(`${name === "from" ? "From" : "To"} Date is invalid`);
      return;
    }

    setDateRange((p) => ({ ...p, [name]: value }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <DateInput label="from" value={from} onChange={onChange} />
      <DateInput label="to" value={to} onChange={onChange} />
    </div>
  );
}
