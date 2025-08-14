import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import CategorySelection from "@/pages/CategorySelection";
import QuizPage from "@/pages/QuizPage";
import ResultsPage from "@/pages/ResultsPage";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  const login = (name: string) => {
    setUserName(name);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUserName("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userName, login, logout }}
    >
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategorySelection />} />
          <Route path="/quiz/:categoryId" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="*" element={<div className="flex items-center justify-center min-h-screen">页面未找到</div>} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}
