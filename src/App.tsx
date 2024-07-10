import { useState } from "react";
import Centered from "./components/Hero/Centered";
import { navList } from "./index";
import SplitHero from "./components/SecondHero/SplitHero";
import SplitWhite from "./components/ThirdHero.tsx/SplitWhite";

const App = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <Centered navList={navList} onclick={() => setNav(!nav)} nav={nav} />
      <SplitHero />
      <SplitWhite />
    </>
  );
};

export default App;
