import { useContext } from "react";
import { inputContext } from "../App";
const Bar = ({ getBarChartUrl }) => {
  const { dataSet } = useContext(inputContext);
  const url = getBarChartUrl(dataSet);

  return <img src={url}></img>;
};

export default Bar;
