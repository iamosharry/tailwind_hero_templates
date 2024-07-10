import Navtype from "../..";
import mark from "../../assets/mark.svg";
import { LuArrowRight } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import List from "./List";

interface Props {
  navList: Navtype[];
  onclick: () => void;
  nav: boolean;
}
const NavBar = ({ navList, onclick, nav }: Props) => {
  return (
    <>
      <header className="p-5 flex items-center justify-between relative ">
        <div>
          <img className="w-[80px] " src={mark} alt="" />
        </div>

        <ul className="hidden md:flex md:space-x-10 p-2">
          {navList.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className="font-semibold text-lg text-gray-800 p-2 hover:cursor-pointer css-underline"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <button className="hidden md:flex items-center font-semibold text-lg text-white px-5 py-2 gap-1 bg-[#6366f1] rounded-full ">
            Log in <LuArrowRight />
          </button>
          {nav === false ? (
            <RxHamburgerMenu
              fontSize="60px"
              onClick={onclick}
              className="md:hidden hover:shadow-inner hover:border-[#6365f125] hover:border-2 p-2 rounded-lg"
            />
          ) : (
            <AiOutlineClose
              fontSize="30px"
              onClick={onclick}
              className="md:hidden"
            />
          )}
        </div>
      </header>
      {nav && <List navList={navList} />}
    </>
  );
};

export default NavBar;
