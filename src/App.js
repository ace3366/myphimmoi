import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myphimmoi" element={<Browse />} />
        <Route path="/myphimmoi/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
