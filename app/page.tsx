"use client";
import DateRangeAndStationPicker from "@/components/DateRangeAndStationPicker";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { getDefaultFromAndToDate } from "@/utils/getDefaultFromAndToDate";
import { useState } from "react";
import useGetData from "@/hooks/useGetData";
import Charts from "@/components/Chart";
import LoadingIndicator from "@/components/LoadingIndicator";
import ErrorElem from "@/components/ErrorElem";
import { stations } from "@/lib/stations";
export default function Home() {
  const { from, to } = getDefaultFromAndToDate();
  const [dateRange, setDateRange] = useState({ from, to });
  const [station, setStation] = useState(stations[0]);
  const { data, isLoading, error } = useGetData({ ...dateRange, station });
  const showError = !!error.trim();
  return (
    <>
      <ThemeSwitcher />
      <div className="bg-white  dark:bg-black flex flex-col items-center gap-3 dark:text-white w-full md:w-2/3">
        <h1 className="text-2xl text-center font-bold">Data Visualization</h1>
        <DateRangeAndStationPicker
          setStation={setStation}
          station={station}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
        <div className="h-[500px] w-full flex justify-center items-center">
          {isLoading ? (
            <LoadingIndicator />
          ) : showError ? (
            <ErrorElem err={error} />
          ) : (
            <Charts data={data} />
          )}
        </div>
      </div>
    </>
  );
}
