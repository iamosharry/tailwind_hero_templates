import Navtype from "../..";
import { LuArrowRight } from "react-icons/lu";

interface Props {
  navList: Navtype[];
}
const FourthHeroList = ({ navList }: Props) => {
  return (
    <ul className=" h-[60vh] pt-10 p-5 md:hidden ">
      {navList.map((item) => (
        <li key={item.id} className="">
          <a href="#" className="font-semibold text-2xl mb-10 block text-white">
            {item.title}
          </a>
        </li>
      ))}
      <hr className="mb-5" />
      <div>
        <button className="text-2xl flex items-center gap-x-3 bg-[#6366f1] text-white px-5 py-3 rounded-full  md:hidden ">
          Log in <LuArrowRight />
        </button>
      </div>
    </ul>
  );
};

export default FourthHeroList;
