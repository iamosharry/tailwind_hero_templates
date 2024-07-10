import NavBar from "./NavBar";
import Navtype from "../..";
import HeroInfo from "./HeroInfo";
interface Props {
  navList: Navtype[];
  onclick: () => void;
  nav: boolean;
}
const Centered = ({ navList, onclick, nav }: Props) => {
  return (
    <>
      <div className="h-[100vh]  relative">
        <NavBar navList={navList} onclick={onclick} nav={nav} />
        <HeroInfo />
      </div>
    </>
  );
};

export default Centered;
