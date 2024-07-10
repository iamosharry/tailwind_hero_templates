// import bgImage from "../../assets/fourthBgImg.avif";

import { LuArrowRight } from "react-icons/lu";
import { navList } from "../..";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import mark from "../../assets/mark.svg";

import FourthHeroList from "../FourthHero/FourthHeroList";

interface Props {
  nav: boolean;
  onclick: () => void;
}

const BgImageHero = ({ nav, onclick }: Props) => {
  return (
    <>
      <div className="h-full lg:h-[100vh] w-full background_image">
        <header className="p-5 flex items-center justify-between relative pt-8 ">
          <div>
            <img className="w-[80px] " src={mark} alt="" />
          </div>

          <ul className="hidden md:flex md:space-x-10 p-2">
            {navList.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="font-semibold text-lg text-white p-2 hover:cursor-pointer css-underline"
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
                className="md:hidden hover:shadow-inner text-white hover:border-[#6365f125] hover:border-2 p-2 rounded-lg"
              />
            ) : (
              <AiOutlineClose
                fontSize="30px"
                onClick={onclick}
                className="md:hidden text-white"
              />
            )}
          </div>
        </header>
        {nav && <FourthHeroList navList={navList} />}

        <div className="mt-20 h-[70vh] pb-10 ">
          <div className="   mb-5 ">
            <p className="border border-gray-300 max-w-fit m-auto py-2 px-4 rounded-full text-[14px] md:text-[16px] text-gray-400">
              Announcing our next round of funding.
              <a
                href="https://github.com/iamosharry/tailwind_hero_templates.git"
                target="_blank"
                className="inline-flex items-center gap-x-1 text-white hover:text-[#665ff0] font-bold ml-1 "
              >
                Get code <LuArrowRight />
              </a>
            </p>
          </div>
          <h1 className="text-white text-center text-[40px] md:text-[50px] font-bold lg:text-[65px] lg:font-bold mb-5 sm:mb-5  px-3 sm:w-[700px] sm:m-auto sm:leading-[1.2em]">
            Data to enrich your online business
          </h1>
          <p className="text-center text-gray-200 mb-8 font-poppins px-4 md:max-w-[690px] md:m-auto md:mb-7 md:font-medium md:text-[20px] ">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="text-center">
            <a
              href="https://github.com/iamosharry/tailwind_hero_templates.git"
              target="_blank"
              className="bg-[#4F46E5] hover:bg-[#3a34b1] text-white font-bold text-lg px-5 py-3 rounded-md"
            >
              Get started
            </a>
            <a
              href="https://github.com/iamosharry/tailwind_hero_templates.git"
              target="_blank"
              className="px-5 py-3 inline-flex items-center gap-x-1 font-bold text-lg text-white"
            >
              Learn more <LuArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BgImageHero;
