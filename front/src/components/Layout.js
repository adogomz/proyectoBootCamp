import React, { children } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <Header />
      {children}
      {/*  <Footer /> */}
    </>
  );
}
