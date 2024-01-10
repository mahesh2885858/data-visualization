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
    PRCP: parseInt(d.PRCP.trim()),
  }));

  return (
    <ResponsiveContainer width={1000} height={400}>
      <LineChart width={1000} height={500} data={data}>
        <Line
          type="monotone"
          dataKey="PRCP"
          stroke="#8884d8"
          activeDot={{ r: 6 }}
          isAnimationActive={true}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="DATE" />
        <YAxis />
        <Tooltip labelClassName="text-black " />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Charts;
