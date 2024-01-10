"use client";

import { Dispatch, SetStateAction } from "react";

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
    if (name === "from") {
      const toDate = new Date(to);
      if (selectedDate >= toDate) {
        alert("From Date can not be after To date");
        return;
      }
    } else {
      const fromDate = new Date(from);
      if (selectedDate <= fromDate || selectedDate.getFullYear() > 1972) {
        alert("To Date can not be before from date");
        return;
      }
    }
    setDateRange((p) => ({ ...p, [name]: value }));
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <input
        type="date"
        onChange={onChange}
        name="from"
        id=""
        value={from}
        placeholder="Select date"
        className="bg-transparent p-2 border border-black dark:border-white placeholder:text-sm placeholder:text-gray-500 focus:outline-none w-2/3 cursor-pointer dark:[color-scheme:dark]"
      />
      <input
        value={to}
        onChange={onChange}
        type="date"
        name="to"
        id=""
        placeholder="Select date"
        className="bg-transparent p-2 border border-black dark:border-white placeholder:text-sm placeholder:text-gray-500 focus:outline-none w-2/3 cursor-pointer dark:[color-scheme:dark]"
      />
    </div>
  );
}
