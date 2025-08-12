import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
