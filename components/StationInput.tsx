import { stations } from "@/lib/stations";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setStation: Dispatch<SetStateAction<string>>;
  station: string;
};
const StationInput = ({ setStation, station }: Props) => {
  return (
    <select
      onChange={(e) => setStation(e.target.value)}
      name="station"
      id="station"
      value={station}
      className="bg-transparent rounded-sm dark:bg-black p-2 border border-black dark:border-white placeholder:text-sm placeholder:text-gray-500 focus:outline-none w-full md:w-2/3 cursor-pointer dark:[color-scheme:dark]"
    >
      {stations.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
};
export default StationInput;
