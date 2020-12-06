import { inputContext } from "../App";
import { useState } from "react";

const UserInputs = () => {
  const [inputData, setInputData] = useState([10, 2, 3, 4, 2, 4, 3]);
  return (
    <div>
      <input
        type="number"
        name="HTML/CSS"
        placeholder="HTML/CSS"
        onBlur={(e) => {
          inputData[0] = e.target.value;

          //   const newData = [...inputData, e.target.value];
          //   console.log(inputData);
          //   console.log(newData);
          setInputData(moduleValue);
        }}
      ></input>
      <input type="number" placeholder="JS1"></input>
      <input type="number" placeholder="JS2"></input>
      <input type="number" placeholder="JS3"></input>
      <input type="number" placeholder="NodeJs"></input>
      <input type="number" placeholder="Databases"></input>
      <input type="number" placeholder="React"></input>
    </div>
  );
};

export default UserInputs;
