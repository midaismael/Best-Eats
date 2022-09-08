import React from "react";
import Food from "./Component/Food";
import HeadlineCards from "./Component/HeadlineCards";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
    </div>
  );
}

export default App;
