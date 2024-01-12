import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const CustomToolTip = (props: TooltipProps<ValueType, NameType>) => {
  const { payload } = props;
  const precipitation = payload?.[0]?.value || "";
  const year = payload?.[0]?.payload?.DATE || "";
  const dp01 = payload?.[0]?.payload?.DP01 || "Not available";
  return (
    <div className="bg-white dark:bg-medium-black dark:shadow-white dark:shadow-sm shadow-lg p-1 border border-gray-400 rounded px-2 flex flex-col justify-center items-start gap-1">
      <span>Precipitation: {precipitation}</span>
      <span>DP01: {dp01}</span>
      <span>Year: {year}</span>
    </div>
  );
};
export default CustomToolTip;
