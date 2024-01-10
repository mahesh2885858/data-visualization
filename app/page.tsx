"use client";

import DateRangePicker from "@/components/DateRangePicker";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { getDateAMonthAgo } from "@/utils/getDateMonthAgo";
import { useState } from "react";
import useGetData from "@/hooks/useGetData";
export default function Home() {
  const from = getDateAMonthAgo().toISOString().substring(0, 10);
  const to = new Date().toISOString().substring(0, 10);
  const [dateRange, setDateRange] = useState({ from, to });
  const { data } = useGetData({ ...dateRange });
  return (
    <>
      <ThemeSwitcher />
      <div className="bg-white dark:bg-black flex flex-col gap-3 dark:text-white">
        <h1 className="text-3xl text-center font-bold">Data Visualization</h1>
        <DateRangePicker {...dateRange} setDateRange={setDateRange} />
      </div>
    </>
  );
}
