import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import HomePagePublic from "./pages/HomePagePublic";
import Login from "./pages/Signin";
import "antd/dist/reset.css";
import PageNotFound from "./pages/Error404";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Academics/Student";
import Teacher from "./pages/Academics/Teacher";
import NOtice from "./pages/Academics/NOtice";
import Attendance from "./pages/Academics/Attendance";
import Calendar from "./pages/Apps/Calendar";
import Assignment from "./pages/Apps/Assignment";
import Support from "./pages/Settings/Support";
import Invite from "./pages/Settings/Invite";

const App = () => {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/academics/students"
              element={
                <ProtectedRoute>
                  <Student />
                </ProtectedRoute>
              }
            />
            <Route
              path="/academics/teachers"
              element={
                <ProtectedRoute>
                  <Teacher />
                </ProtectedRoute>
              }
            />
            <Route
              path="/academics/notice"
              element={
                <ProtectedRoute>
                  <NOtice />
                </ProtectedRoute>
              }
            />
            <Route
              path="/academics/attendance"
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/activity/sports"
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/activity/cultural fest"
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/activity/technical fest"
              element={
                <ProtectedRoute>
                  <Attendance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/apps/calendar"
              element={
                <ProtectedRoute>
                  <Calendar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/apps/assignment"
              element={
                <ProtectedRoute>
                  <Assignment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings/support"
              element={
                <ProtectedRoute>
                  <Support />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings/invite"
              element={
                <ProtectedRoute>
                  <Invite />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePagePublic />
                </PublicRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
