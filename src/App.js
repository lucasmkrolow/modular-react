import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./components/post";
import Posts from "./components/posts";

function App() {
  return (
    <div
      className="App"
      style={{
        top: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        position: "absolute"
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:idDoPostParam" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
