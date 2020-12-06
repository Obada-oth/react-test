import { getBarChartUrl } from "../util/getChartUrl";
const Bar = () => {
  const inputData = [10, 9, 7, 5, 8, 6, 10];
  return <img src={getBarChartUrl(inputData)}></img>;
};

export default Bar;
