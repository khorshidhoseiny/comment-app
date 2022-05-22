import { Route, Switch } from "react-router";
import "./App.css";
import Discussion from "./Discussion/Discussion";
import routes from "./routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
