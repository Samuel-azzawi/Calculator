import Screen from "./components/Screen";
import Numbers from "./components/Numbers";
import Spin from "./components/Spin";
import "./App.css";
import { useState } from "react";
const App = () => {

   const [num, setNum] = useState("0");
  
    return (
    <div id="spin" className="calculator App-logo">
            <Screen num={num}/>
            <Numbers setNum={setNum} />
      <Spin />
    </div>
  );
};
export default App;