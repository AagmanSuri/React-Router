import "./styles.css";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* < Route path =Home /> */}
        {/* Here path is defined to create a route to declare which component to get render*/}
        <Route path="/Shop" component={Shop} />
        <Route path="/About" component={About} />
      </div>
    </Router>
  );
}
