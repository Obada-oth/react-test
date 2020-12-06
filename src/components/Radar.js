import { inputContext } from "../App";
import { useContext } from "react";
const Radar = ({ getRadarChartUrl }) => {
  const { dataSet } = useContext(inputContext);
  const url = getRadarChartUrl(dataSet);

  return <img src={url}></img>;
};

export default Radar;
