import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import ResultContextProvider from "../context/ResultContextProvider";
import Links from "./Links";
import Input from "./Input";
const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" min-h-screen bg-gray-100  dark:bg-[#202124] dark:text-gray-100 ">
        <ResultContextProvider>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className=" container mx-auto px-10">
            <Input />
            <Links />
            <Outlet />
          </div>
          <Footer />
        </ResultContextProvider>
      </div>
    </div>
  );
};

export default Layout;
