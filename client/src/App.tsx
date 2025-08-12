import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";

import SignUp from "./pages/SignUp";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
