import React from "react";
import BootesProject from "../components/BootesProject";
import MySkills from "../components/MySkills";
import MyCreations from "../components/MyCreations";


function HomePage() {
  return (
    <main>
      <BootesProject />
      <MySkills />
      <MyCreations />
    </main>
  );
}

export default HomePage;