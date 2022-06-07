import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';

// Auth
import { signIn } from "./auth/auth";
import AuthRoute from "./auth/AuthRoute";

// Components
import Header from "./components/Header";
import LoginForm from './components/LoginForm';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Users from "./pages/Users";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user !== null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <>
      <Header authenticated={authenticated} logout={logout} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route
            path="/login"
            element={<LoginForm authenticated={authenticated} login={login} />}
          />
          <Route
            path="/profile"
            element={
              <AuthRoute user={user} component={<Profile user={user} />} />
            }
          >
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
