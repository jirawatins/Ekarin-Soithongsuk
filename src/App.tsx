import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/components/sections/Contact";
import ProjectPage from "@/pages/ProjectPage";

function AppContent() {
  const location = useLocation();
  return (
    <Layout>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
