import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";

import SignUp from "./pages/SignUp";

import Home from "./pages/Home";

import Groups from "./pages/Groups";

import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/" element={<Home />} />

        <Route path="/groups" element={<Groups />} />

        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
