import { LuArrowRight } from "react-icons/lu";
import mark from "../../assets/mark.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import splitPhotoWhite from "../../assets/project-app-screenshot.png";
const SplitWhite = () => {
  return (
    <div className="bg-white pl-5 md:pl-10 py-20 relative overflow-hidden ">
      <div className="mb-20">
        <img src={mark} className="w-[70px]" alt="" />
      </div>
      <div>
        <div className="mb-14 max-w-[350px]">
          <a
            href="#"
            className="text-[#646EC4] border border-[#646EC4] bg-[#646ec43a] px-5 py-2 rounded-full font-bold md:font-normal"
          >
            What's new
          </a>
          <a
            href="#"
            className="text-[#848688] ml-4 font-bold md:font-normal inline-flex items-center"
          >
            Just shipped v1.0
            <MdKeyboardArrowRight className="text-[#788191] text-lg ml-1" />
          </a>
        </div>

        <div className="mb-14 w-full lg:max-w-[50%] indexx">
          <h1 className="mb-5 text-4xl text-gray-800  sm:border sm:max-w-[600px] sm:text-5xl sm:font-bold md:border-none  max-w-[350px] md:max-w-[600px] md:text-6xl  font-extrabold leading-[1.3em] md:leading-[1.1em] md:font-bold">
            Deploy to the cloud with confidence
          </h1>
          <p className="mb-5 max-w-[350px]  sm:max-w-[600px] text-[#707172] text-lg md:text-xl font-normal ">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>

          <div className="">
            <button className="bg-[#6366F1] hover:bg-[#3a34b1] text-white font-bold text-lg px-5 py-3 rounded-md">
              Get started
            </button>
            <button className="px-5 py-3 inline-flex items-center gap-x-1 font-bold text-lg text-gray-600">
              Learn more <LuArrowRight />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[768px]  rounded-2xl border_css  overflow-hidden qrr scale-105">
          <img className="w-full " src={splitPhotoWhite} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SplitWhite;
