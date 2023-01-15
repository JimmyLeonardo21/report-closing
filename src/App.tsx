import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FormClosing } from "./pages/FormClosing";
import dayjs from "dayjs";

function App() {
  const [count, setCount] = useState(0);
  const startEndTime = () => {
    const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
    console.log(now);
  };
  return (
    <div className="App">
      <FormClosing />
    </div>
  );
}

export default App;
