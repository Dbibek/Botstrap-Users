import { Route, BrowserRouter as Router } from "react-router-dom";
import UserCard from "./components/UserCard";
import "./App.css";
import useFetchdata from "./Hooks/useFetchdata";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import UserDetails from "./components/UserDetails";

function App() {
  const { users } = useFetchdata([]);

  return (
    <Router>
      <div className="container">
        <Route exact path="/">
          <UserCard users={users} />
        </Route>
        <Route path="/users/:id">
          <UserDetails users={users} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
