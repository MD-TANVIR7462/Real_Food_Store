import { useState } from "react";
import MainNavbar from "../Components/Shared/NavBar/MainNavbar";
import HomePage from "../Pages/Home/HomePage";

const MainLayout = () => {
  const [text,setText]=useState('')

  return (
    <>
      <MainNavbar setText={setText}></MainNavbar>
     <div className=" w-[95%]  max-w-[1200px] mx-auto ">
     <HomePage text={text}></HomePage>
     </div>
    </>
  );
};

export default MainLayout;
