import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostDetails from "./components";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/post/:id" component={PostDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;