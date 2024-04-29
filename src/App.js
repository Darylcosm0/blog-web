import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import CreatePost from "./components/CreatePost";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Define the route for the homepage without specifying the file path */}
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
