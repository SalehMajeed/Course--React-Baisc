import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextFrom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About US" toggleMode={toggleMode} mode={mode} />
      {/* <Navbar   /> */}
      <div className="container my-3">
        <TextFrom heading="Enter Your Text to analyze below" mode={mode}/>
      </div>
      <About />
    </>
  );
}

export default App;
