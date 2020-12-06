import { inputContext } from "../App";
import { useContext } from "react";
import MODULES from "../modules";

const UserInputs = () => {
  const { dataSet, setDataSet } = useContext(inputContext);
  return (
    <form>
      {dataSet.map((module, i) => {
        return (
          <div>
            <label>{MODULES[i]}</label>
            <input
              type="number"
              value={module}
              onChange={(e) => {
                const newDataSet = [...dataSet];
                newDataSet[i] = parseInt(e.target.value);
                setDataSet(newDataSet);
              }}
            ></input>
          </div>
        );
      })}
    </form>
  );
};

export default UserInputs;
