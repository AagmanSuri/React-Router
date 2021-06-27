import "./styles.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
export default function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Nav />
      <Home />
      <Shop />
      <About />
    </div>
  );
}
