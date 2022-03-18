import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Display from "./components/Display";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [result, setResult] = useState("0");
  const concOp = (e) => {
    //console.log(e.target.innerHTML);
    if (result === "0") setResult("");
    if (e.target.innerHTML === "C") setResult("0");
    else setResult((prevState) => prevState.concat(e.target.innerHTML));
  };
  const evalResult = () => {
    setResult(evaluate(result).toString());
  };
  return (
    <div>
      <Header />
      <Display result={result} />
      <Buttons concOp={concOp} onEval={evalResult} />
    </div>
  );
}

export default App;
