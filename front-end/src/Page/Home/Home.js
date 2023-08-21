import React from "react";
import Header from "../../components/Header/Header";
import AudioAnalysis from "../../components/AudioAnalysis/AudioAnalysis";

function Home() {
  return (
    <>
      <Header />
      <main>
        <AudioAnalysis />
      </main>
    </>
  );
}

export default Home;
