import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Educataion from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MalwareAnalysis from "./components/projects/MalwareAnalysis";
import Paradise from "./components/projects/ParadiseCode";
import ChironCMS from "./components/projects/ChironCMS";
import ProxmoxHomelab from "./components/projects/ProxmoxHomelab";
import CTFWriteups from "./components/projects/CTFWriteups";
import Wazuh from "./components/projects/Wazuh";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      <main className="m-0 p-0">
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Experience />
                <Projects />
                <Educataion />
                <Skills />
                <Contact />
              </>
            }
          />

          <Route
            path="/projects/MalwareAnalysis"
            element={<MalwareAnalysis />}  
          />
          <Route
            path="/projects/ParadiseCode"
            element={<Paradise />}  
          />
          <Route
            path="/projects/ChironCMS"
            element={<ChironCMS />}
          />
          <Route
            path="/projects/ProxmoxHomelab"
            element={<ProxmoxHomelab />}
          />
          <Route
            path="/projects/CTFWriteups"
            element={<CTFWriteups />}
          />
          <Route
            path="/projects/Wazuh"
            element={<Wazuh />}
          />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}
