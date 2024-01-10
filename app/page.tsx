"use client";
import DateRangePicker from "@/components/DateRangePicker";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { getDefaultFromAndToDate } from "@/utils/getDefaultFromAndToDate";
import { useState } from "react";
import useGetData from "@/hooks/useGetData";
import Charts from "@/components/Chart";
export default function Home() {
  const { from, to } = getDefaultFromAndToDate();
  const [dateRange, setDateRange] = useState({ from, to });
  const { data, isLoading } = useGetData({ ...dateRange });
  return (
    <>
      <ThemeSwitcher />
      <div className="bg-white dark:bg-black flex flex-col items-center gap-3 dark:text-white w-full">
        <h1 className="text-3xl text-center font-bold">Data Visualization</h1>
        <DateRangePicker {...dateRange} setDateRange={setDateRange} />
        {isLoading ? "Loading..." : <Charts data={data} />}
      </div>
    </>
  );
}
