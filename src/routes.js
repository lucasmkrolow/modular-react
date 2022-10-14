import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/posts";
import Post from "./components/post";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/post/:idDoPostParam" element={<Post />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
