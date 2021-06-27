import "./styles.css";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import UserPost from "./Components/UserPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* Switch matches the url and stops  */}
        <Switch>
          {/* exact has been intoduced */}
          <Route path="/" exact component={Home} />
          {/* Here path is defined to create a route to declare which component to get render*/}
          <Route path="/Shop" exact component={Shop} />
          <Route path="/About" component={About} />
          <Route path="/Shop/:id" component={UserPost} />
        </Switch>
      </div>
    </Router>
  );
}
