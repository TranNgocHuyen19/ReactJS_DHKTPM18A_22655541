import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <Filter />
        </div>
        <div className="col-span-9 flex flex-col justify-center items-center">
          <p className="font-semibold text-5xl">
            Sorry, no results were found for "cakecascara"
          </p>
          <img src={"nothing.png"} alt="" width={400} height={600} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
