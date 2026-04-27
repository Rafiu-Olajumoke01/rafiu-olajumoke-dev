import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layouts";

const Landing  = lazy(() => import('./pages/Landing/Landing'));
const Home     = lazy(() => import('./pages/Home/home'));
const Board    = lazy(() => import('./pages/Board/board'));
const Journey  = lazy(() => import('./pages/Journey/Journey'));
const Mindset  = lazy(() => import('./pages/Mindset/Mindset'));
const Skill  = lazy(() => import('./pages/Skill/Skill'));
const Kanban   = lazy(() => import('./pages/Kanban/Kanban'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="app-loading">Loading...</div>}>
        <BrowserRouter>
          <Routes>
            {/* Landing has no sidebar/navbar */}
            <Route path="/" element={<Landing />} />

            {/* All other pages share the Layout (Top + Sidebar) */}
            <Route element={<Layout />}>
              <Route path="/home"    element={<Home />} />
              <Route path="/board"   element={<Board />} />
              <Route path="/mindset" element={<Mindset />} />
              <Route path="/kanban"  element={<Kanban />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/skill" element={<Skill />} />
              {/* <Route path="/arsenal" element={<Arsenal />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;