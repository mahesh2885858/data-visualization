import { useEffect, useState } from "react";
type Props = {
  from: string;
  to: string;
};
const useGetData = ({ from, to }: Props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.ncei.noaa.gov/access/services/data/v1?dataset=global-summary-of-the-year&dataTypes=DP01,DP05,DP10,DSND,DSNW,DT00,DT32,DX32,DX70,DX90,SNOW,PRCP&stations=ASN00084027&startDate=${from}&endDate=${to}&includeAttributes=true&format=json`
        );
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [from, to]);
  return { data, isLoading };
};
export default useGetData;
