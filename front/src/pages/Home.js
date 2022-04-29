import React from "react";
import ReactPlayer from "react-player";
import "../assets/css/Home.css";
import video1 from "../assets/videos/pexels-polina-kovaleva-5645037.mp4";

export default function Home() {
  return (
    <>
      <div>
        <div className="padre">
          <div className="uno video">
            {<ReactPlayer url={video1} width="100%" height="100%" playing />}
          </div>
          <div className="uno unoTexto">
            <h1>En Nutriglesias te ayudaremos a encontrarte mejor.</h1>
          </div>
        </div>
      </div>
    </>
  );
}
