import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./app.css";
import {Component} from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Work from "./components/Work";
class App extends Component {

  render() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
