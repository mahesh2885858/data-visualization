"use client";

import DateRangePicker from "@/components/DateRangePicker";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { getDateAMonthAgo } from "@/utils/getDateMonthAgo";
import { useState } from "react";
import useGetData from "@/hooks/useGetData";
import Charts from "@/components/Chart";
export default function Home() {
  const from = getDateAMonthAgo(1952).toISOString().substring(0, 10);
  const to = getDateAMonthAgo(1972).toISOString().substring(0, 10);
  const [dateRange, setDateRange] = useState({ from, to });
  const { data } = useGetData({ ...dateRange });
  return (
    <>
      <ThemeSwitcher />
      <div className="bg-white dark:bg-black flex flex-col items-center gap-3 dark:text-white">
        <h1 className="text-3xl text-center font-bold">Data Visualization</h1>
        <DateRangePicker {...dateRange} setDateRange={setDateRange} />
        {/* @ts-ignore */}
        <Charts data={data} />
      </div>
    </>
  );
}
