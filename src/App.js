import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Dashboard from "./Dashboard/pages/Dashboard";
import UpdateReport from "./Dashboard/components/UpdateReport";
import MainHeader from "./shared/components/Navigation/MainHeader";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/reports/:reportId" exact>
          <UpdateReport />
        </Route>
        {/* Redirect for Unknown paths */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
