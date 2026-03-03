// Routing SetUp
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Genres from "./pages/Genres"
import Favorites from "./pages/Favorites";
import Downloads from "./pages/Downloads";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/genres" element={<Genres />} /> 
          <Route path="/favorites" element={<Favorites />} /> 
          <Route path="/downloads" element={<Downloads />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/settings" element={<Settings />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;