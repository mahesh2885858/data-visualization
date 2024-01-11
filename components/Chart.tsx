"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomToolTip from "./CustomTooltip";
// the below type is manually written by analyzing the api response
type TData = {
  DATE: string;
  STATION: string;
  DP01_ATTRIBUTES: string;
  PRCP_ATTRIBUTES: string;
  PRCP: string;
  DP10: string;
  DP10_ATTRIBUTES: string;
  DP01: string;
};

const Charts = (props: { data: TData[] }) => {
  const data = props.data.map((d) => ({
    ...d,
    //making sure the data on y-axis is a number, not string.
    PRCP: parseInt(d.PRCP.trim()),
  }));

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="PRCP"
          stroke="#8884d8"
          activeDot={{ r: 6 }}
          isAnimationActive={true}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" opacity={0.5} />
        <XAxis tickMargin={5} dataKey="DATE" tickLine={false} color="#000" />
        <YAxis tickLine={false} />
        <Tooltip labelClassName="text-black " content={CustomToolTip} />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Charts;
