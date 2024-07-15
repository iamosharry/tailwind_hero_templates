import { LuArrowRight } from "react-icons/lu";
import GradientGrid from "../darkGridHero/GradientGrid";

const HeroInfo = () => {
  return (
    <>
      <div className="absolute w-full h-full  to-[#9089fc] top-0 opacity-10 z-[-1] ">
        <GradientGrid />
      </div>
      <div className="mt-20 z-50">
        <div className="  mb-5 ">
          <p className="border border-gray-300 max-w-fit m-auto py-2 px-4 rounded-full text-[14px] md:text-[16px] text-[#111827] text-center">
            Announcing our next round of funding.
            <a
              href="https://github.com/iamosharry/tailwind_hero_templates.git"
              target="_blank"
              className="inline-flex items-center gap-x-1 text-[#4e46e2] hover:text-[#665ff0] font-bold ml-1 "
            >
              Get code <LuArrowRight />
            </a>
          </p>
        </div>
        <h1 className=" text-[#111827] text-center text-[40px] md:text-[50px] font-bold lg:text-[65px] lg:font-bold mb-5 sm:mb-5  px-3 sm:w-[700px] sm:m-auto sm:leading-[1.2em]">
          Data to enrich your online business
        </h1>
        <p className="text-center text-gray-600 mb-8 font-poppins px-4 md:max-w-[690px] md:m-auto md:mb-7 md:font-medium md:text-[20px] ">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
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
            className="px-5 py-3 inline-flex items-center gap-x-1 font-bold text-lg text-gray-600"
          >
            Learn more <LuArrowRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroInfo;
