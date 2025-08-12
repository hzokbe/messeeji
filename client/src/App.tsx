import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";

import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
