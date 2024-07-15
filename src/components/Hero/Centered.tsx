import NavBar from "./NavBar";
import Navtype from "../..";
import HeroInfo from "./HeroInfo";
import Beams from "../darkGridHero/beam/Beams";
// import GradientGrid from "../darkGridHero/GradientGrid";

interface Props {
  navList: Navtype[];
  onclick: () => void;
  nav: boolean;
}
const Centered = ({ navList, onclick, nav }: Props) => {
  return (
    <>
      <div className="relative pb-36 pt-2 h-[100vh] md:h-full">
        <NavBar navList={navList} onclick={onclick} nav={nav} />
        <HeroInfo />
        <Beams />
      </div>
    </>
  );
};

export default Centered;
