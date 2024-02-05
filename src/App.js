import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import AddGame from "./pages/AddGame";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addGame" element={<AddGame />} />
          <Route path="/:displayName" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
