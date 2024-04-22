// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetails />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
