import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Authorization from "./pages/Authorization/Authorization";
import Registration from "./pages/Registration/Registration";
import ProtectedRoute from "./components/ProtectedRouter/ProtectedRouter";
import Profile from "./pages/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
