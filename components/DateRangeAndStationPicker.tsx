"use client";
import { Dispatch, SetStateAction } from "react";
import DateInput from "./DateInput";
import StationInput from "./StationInput";
import { TDateRange } from "@/utils/types";

type Props = {
  dateRange: TDateRange;
  setDateRange: Dispatch<SetStateAction<TDateRange>>;
  setStation: Dispatch<SetStateAction<string>>;
  station: string;
};
const DateRangeAndStationPicker = ({
  dateRange,
  setDateRange,
  setStation,
  station,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <DateInput
        variant="from"
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <DateInput
        variant="to"
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <StationInput setStation={setStation} station={station} />
    </div>
  );
};
export default DateRangeAndStationPicker;
