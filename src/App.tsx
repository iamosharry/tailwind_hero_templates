import { useState } from "react";
import Centered from "./components/Hero/Centered";
import { navList } from "./index";
import SplitHero from "./components/SecondHero/SplitHero";
import SplitWhite from "./components/ThirdHero.tsx/SplitWhite";
import BgImageHero from "./components/FourthHero/BgImageHero";
import CodeHero from "./components/FifthHero/CodeHero";

import { DarkGridHero } from "./components/darkGridHero/DarkGridHero";

const App = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <DarkGridHero />
      <Centered navList={navList} onclick={() => setNav(!nav)} nav={nav} />
      <SplitHero />
      <SplitWhite />
      <BgImageHero onclick={() => setNav(!nav)} nav={nav} />
      <CodeHero />
      {/* <BtnSpectra /> */}
    </>
  );
};

export default App;
