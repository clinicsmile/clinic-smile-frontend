import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Home, Login, Register, Profile, Users,Logout } from "./pages";

import AuthLayout from "./components/layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            element={
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            }
          >
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            <Route path="/logout" element={<Logout/>} />
          </Route>

          <Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
