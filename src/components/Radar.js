import { getRadarChartUrl } from "../util/getChartUrl";
import { inputContext } from "../App";
import { useContext } from "react";
const Radar = () => {
  const inputData = [10, 2, 3, 4, 2, 4, 3];
  return <img src={getRadarChartUrl(inputData)}></img>;
};

export default Radar;
