import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Departments from "./pages/Departments";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./theme";
import Department from "./pages/Department";
import AddDepartment from "./pages/AddDepartment";

/* ------------------------------------------------------ */

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <div className="app_container">
        <Router>
          {/* Navbar */}
          <div className="container">
            <Navbar />
          </div>
          <div className="divider"></div>

          {/*  Pages Routes Control */}
          <main>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/departments" element={<Departments />}></Route>
                <Route path="/departments/:id" element={<Department />}></Route>
                <Route
                  path="/AddDepartment"
                  element={<AddDepartment />}
                ></Route>
              </Routes>
            </div>
          </main>

          {/* footer */}


        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
