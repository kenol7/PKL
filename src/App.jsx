import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Flex } from "@radix-ui/themes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;