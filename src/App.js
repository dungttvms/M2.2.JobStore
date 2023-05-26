import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ThemeProvider from "./contexts/ThemeProvider";
import NotFoundPage from "./pages/NotFoundPage";
import AuthRequire from "./routes/AuthRequire";
import MainLayout from "./layouts/MainLayout";
import MainHeader from "./layouts/MainHeader";
import MainFooter from "./layouts/MainFooter";

function App() {
  return (
    <ThemeProvider>
      <MainHeader />
      <Routes>
        <Route
          path="/"
          element={
            <AuthRequire>
              <MainLayout />
            </AuthRequire>
          }
        />

        <Route index element={<HomePage />} />
        <Route path="/job/:id" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <MainFooter />
    </ThemeProvider>
  );
}

export default App;
