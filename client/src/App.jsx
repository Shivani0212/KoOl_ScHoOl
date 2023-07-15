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
