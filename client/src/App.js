import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import PowerBiReport from "scenes/powerbi";
import Purchases from "scenes/purchases";
import Login from "scenes/login";
import Forms from "scenes/forms";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const profile = useState(JSON.parse(localStorage.getItem("profile")));
  const user = profile[0]?.data?.result;

  // console.log(user);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={user ? (
              <Navigate to="/dashboard" replace />
            ) : <Navigate to="/login" replace />
            } />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" replace />} />
            <Route path="/power-bi-report" element={user ? <PowerBiReport /> : <Navigate to="/login" replace />} />
            <Route path="/products" element={user ? <Products /> : <Navigate to="/login" replace />} />
            <Route path="/customers" element={user ? <Customers /> : <Navigate to="/login" replace />} />
            <Route path="/purchases" element={user ? <Purchases /> : <Navigate to="/login" replace />} />
            <Route path="/geography" element={user ? <Geography /> : <Navigate to="/login" replace />} />
            <Route path="/profit" element={user ? <Overview /> : <Navigate to="/login" replace />} />
            <Route path="/daily" element={user ? <Daily /> : <Navigate to="/login" replace />} />
            <Route path="/monthly" element={user ? <Monthly /> : <Navigate to="/login" replace />} />
            <Route path="/breakdown" element={user ? <Breakdown /> : <Navigate to="/login" replace />} />
            <Route path="/admin" element={user ? <Admin /> : <Navigate to="/login" replace />} />
            <Route path="/forms" element={user ? <Forms /> : <Navigate to="/login" replace />} />
            <Route path="/performance" element={user ? <Performance /> : <Navigate to="/login" replace />} />
          </Route>
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
