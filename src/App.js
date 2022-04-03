import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextFrom";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About US" />
      {/* <Navbar   /> */}
      <div className="container my-3">
        <TextFrom heading="Enter Your Text to analyze below"/>
      </div>
      <About />
    </>
  );
}

export default App;
