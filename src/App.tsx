import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import ApparelPage from "./pages/ApparelPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Apparel" element={<ApparelPage />} />
        </Routes>
      </BrowserRouter>
      <ApparelPage />
    </>
  );
}

export default App;
