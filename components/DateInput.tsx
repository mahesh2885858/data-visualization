import { TDateRange } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";

type Props = {
  dateRange: TDateRange;
  variant: keyof TDateRange;
  setDateRange: Dispatch<SetStateAction<TDateRange>>;
};
const DateInput = ({ variant, dateRange, setDateRange }: Props) => {
  const value = dateRange[variant];
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { from, to } = dateRange;
    const { name, value } = e.target;
    const selectedDate = new Date(value);
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const isInvalidFromTo =
      name === "from" ? selectedDate >= toDate : selectedDate <= fromDate;

    if (isInvalidFromTo) {
      alert(`${name === "from" ? "From" : "To"} Date is invalid`);
      return;
    }

    setDateRange((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <input
      type="date"
      onChange={onChange}
      name={variant}
      value={value}
      placeholder="Select date"
      className="bg-transparent rounded-sm p-2 border border-black dark:border-white placeholder:text-sm placeholder:text-gray-500 focus:outline-none w-full md:w-2/3 cursor-pointer dark:[color-scheme:dark]"
    />
  );
};
export default DateInput;
