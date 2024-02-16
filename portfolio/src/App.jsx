import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Projects from "./pages/projects/Projects.jsx";
import ProjectDetail from "./pages/projects/ProjectDetail.jsx";
import About from "./pages/about/About.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
