import React from "react";
import "../assets/css/App.css";
import ReactPlayer from "react-player";
import video1 from "../assets/videos/pexels-polina-kovaleva-5645037.mp4";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <section>
        <div className="padre">
          <div className=" video">
            {<ReactPlayer url={video1} width="100%" height="100%" playing />}
          </div>
          <div className="uno unoTexto">
            <h1>Te ayudaremos a encontrarte mejor.</h1>
          </div>
        </div>
      </section>
    </>
  );
}
