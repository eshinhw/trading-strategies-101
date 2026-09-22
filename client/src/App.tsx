import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import { Nav } from "./components/Nav";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { CoursePage } from "./pages/CoursePage";
import { ExamPage } from "./pages/ExamPage";
import { ModulePage } from "./pages/ModulePage";
import { LessonPage } from "./pages/LessonPage";
import { AuthPage } from "./pages/AuthPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#0b0d12]">
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CoursePage />} />
            <Route path="/courses/:slug/exam" element={<ExamPage />} />
            <Route path="/module/:slug" element={<ModulePage />} />
            <Route path="/lesson/:slug" element={<LessonPage />} />
            <Route path="/login" element={<AuthPage mode="login" />} />
            <Route path="/signup" element={<AuthPage mode="signup" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
