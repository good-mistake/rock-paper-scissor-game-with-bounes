import React from "react";
import Bounes from "./Bounes.tsx";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Home.tsx";
function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bonus-page" element={<Bounes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
