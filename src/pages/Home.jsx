import React from "react";
import { NavBar } from "../components/NavBar/Nav";
import { Banierre } from "../components/bannière/Banierre";
import "../styles.css";


export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     <NavBar></NavBar>
    <Banierre></Banierre>
    </div>
  );
};
