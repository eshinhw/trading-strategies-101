import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import { Nav } from "./components/Nav";

// Lazy-loaded per route so a heavy, page-specific dependency — recharts and
// katex, both pulled in only by the Options strategy-lesson view — ships in
// its own chunk instead of bloating the initial bundle every page pays for.
// See LessonPage.tsx's StrategyLessonBody for where those libraries are
// actually used.
const LandingPage = lazy(() => import("./pages/LandingPage").then((m) => ({ default: m.LandingPage })));
const CoursesPage = lazy(() => import("./pages/CoursesPage").then((m) => ({ default: m.CoursesPage })));
const CoursePage = lazy(() => import("./pages/CoursePage").then((m) => ({ default: m.CoursePage })));
const BooksPage = lazy(() => import("./pages/BooksPage").then((m) => ({ default: m.BooksPage })));
const ExamPage = lazy(() => import("./pages/ExamPage").then((m) => ({ default: m.ExamPage })));
const ModulePage = lazy(() => import("./pages/ModulePage").then((m) => ({ default: m.ModulePage })));
const LessonPage = lazy(() => import("./pages/LessonPage").then((m) => ({ default: m.LessonPage })));
const ConstructionPage = lazy(() =>
  import("./pages/ConstructionPage").then((m) => ({ default: m.ConstructionPage })),
);
const AuthPage = lazy(() => import("./pages/AuthPage").then((m) => ({ default: m.AuthPage })));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#0b0d12]">
          <Nav />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:slug" element={<CoursePage />} />
              <Route path="/courses/:slug/exam" element={<ExamPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/module/:slug" element={<ModulePage />} />
              <Route path="/lesson/:slug" element={<LessonPage />} />
              <Route path="/construction/:slug" element={<ConstructionPage />} />
              <Route path="/login" element={<AuthPage mode="login" />} />
              <Route path="/signup" element={<AuthPage mode="signup" />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
