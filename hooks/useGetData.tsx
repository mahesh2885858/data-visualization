import { useEffect, useState } from "react";
type Props = {
  from: string;
  to: string;
  station: string;
};
const useGetData = ({ from, to, station }: Props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}${station}&startDate=${from}&endDate=${to}&format=json`
        );
        if (!response.ok)
          throw new Error("Something went wrong Please refresh the page");
        const data = await response.json();
        setData(data);
      } catch (err: any) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [from, to, station]);
  return { data, isLoading, error };
};
export default useGetData;
