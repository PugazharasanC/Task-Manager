import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./Components/AppHeader";
import ThemeProvider from "./Contexts/ThemeContext";
import Home from "./Components/Home";
import TaskProvider from "./Contexts/TaskContext";
import About from "./Components/About";

const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="bg-slate-100 dark:bg-slate-900 dark:text-white min-h-screen flex flex-col">
          <BrowserRouter>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-x-2 dark:border-slate-800 flex-1">
              <AppHeader />
              <main className="flex-1 flex justify-center items-center">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;
