import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        <Route
          path="/about"
          render={() => {
            return <About />;
          }}
        ></Route>
        <Route
          path="/projects"
          render={() => {
            return <Projects />;
          }}
        ></Route>
                <Route
          path="/projects/projectId"
          render={() => {
            return <Project />;
          }}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
