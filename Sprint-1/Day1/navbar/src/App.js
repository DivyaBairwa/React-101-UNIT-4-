import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>

      <div>
        <MobileOs />
      </div>
    </>
  );
}

export default App;
