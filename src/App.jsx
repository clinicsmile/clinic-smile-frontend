import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home, Login, Register, Profile, Users, Logout, Appointments,CreateAppoimentNoAuth, MedicalRecords} from "./pages";

import AuthLayout from "./components/layouts/AuthLayout";
import { InactivityDetector } from "./components/inactivityDetector/InactivityDector";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            element={
              <AuthLayout>
                <InactivityDetector />
                <Outlet />
              </AuthLayout>
            }
          >
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            <Route path="/appointments" element={<Appointments/>}/>
            <Route path="/medicalRecords" element={<MedicalRecords/>}/>
            <Route path="/logout" element={<Logout />} />
          </Route>

          <Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/create-appoinment" element={<CreateAppoimentNoAuth />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
