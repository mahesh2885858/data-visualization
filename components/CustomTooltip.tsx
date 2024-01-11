import { TooltipProps } from "recharts";

import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const CustomToolTip = (props: TooltipProps<ValueType, NameType>) => {
  const { payload } = props;
  console.log({ payload });
  const precipitation = payload?.[0]?.value || "";
  const year = payload?.[0]?.payload?.DATE || "";
  return (
    <div className="bg-white dark:bg-[#3f3f3f] dark:shadow-white dark:shadow-sm shadow-lg p-1 border border-gray-400 rounded px-2 flex flex-col justify-center items-center gap-1">
      <span>Precipitation: {precipitation}</span>
      <span>Year: {year}</span>
    </div>
  );
};
export default CustomToolTip;
