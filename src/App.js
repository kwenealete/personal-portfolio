// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navigate";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
