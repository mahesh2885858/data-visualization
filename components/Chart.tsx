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
  PRCP: string;
  DP01: string;
};

const Charts = (props: { data: TData[] }) => {
  const data = props.data.map((d) => ({
    ...d,
    PRCP: parseInt(d.PRCP.trim()),
    DP01: d.DP01 ? parseInt(d.DP01.trim()) : 0,
  }));
  if (data.length === 0) return <p>No Data found....!</p>;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="PRCP"
          stroke="#8884d8"
          activeDot={{ r: 6 }}
          isAnimationActive={true}
        />
        <Line
          type="monotone"
          dataKey="DP01"
          stroke="#8884d8"
          activeDot={{ r: 6 }}
          isAnimationActive={true}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" opacity={0.5} />
        <XAxis
          tickMargin={5}
          padding={{ left: 30 }}
          dataKey="DATE"
          tickLine={false}
          color="#000"
        />
        <YAxis tickLine={false} />
        <Tooltip labelClassName="text-black " content={CustomToolTip} />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Charts;
