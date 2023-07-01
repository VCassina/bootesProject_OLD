import React from "react";
import BootesProject from "../components/BootesProject";
import MySkills from "../components/MySkills";
import MyCreations from "../components/MyCreations";
import ContactUs from "../components/ContactUs"


function HomePage() {
  return (
    <main>
      <BootesProject />
      <MySkills />
      <MyCreations />
      <ContactUs />
    </main>
  );
}

export default HomePage;