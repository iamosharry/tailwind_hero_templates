import { MdKeyboardArrowRight } from "react-icons/md";
import mark from "../../assets/mark.svg";
import { LuArrowRight } from "react-icons/lu";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeHero = () => {
  const codeString = `
import { useState } from 'react';
import { Switch } from '@headlessui/react';

function Example() {
  const [enabled, setEnabled] = useState(true);

  return (
    <form action="/notification-settings" method="post">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        name="notifications"
      >
        {/* ... */}
      </Switch>
      <button type="submit">Submit</button>
    </form>
  );
}
  
`;
  const customStyle = {
    ...okaidia,
    'pre[class*="language-"]': {
      ...okaidia['pre[class*="language-"]'],
      background: "#111827",
    },
  };
  return (
    <>
      <div className="">
        <div className="pl-7 md:pl-20 py-16 beginn md:flex md:justify-between  ">
          <div className=" md:max-w-[50%] ">
            <div className="mb-14 ">
              <img src={mark} className="w-[70px]" alt="" />
            </div>
            <div className="mb-14 max-w-[350px] ">
              <a
                href="#"
                className="text-[#646EC4] border border-[#646EC4] bg-[#646ec43a] px-5 py-2 rounded-full font-bold md:font-normal"
              >
                What's new
              </a>
              <a
                href="#"
                className="text-[#848688] ml-4 font-semibold md:font-normal inline-flex items-center"
              >
                Just shipped v1.0
                <MdKeyboardArrowRight className="text-[#788191] text-lg ml-1" />
              </a>
            </div>
            <div className="mb-8 w-full indexx ">
              <h1 className="mb-5  text-4xl text-gray-800   sm:max-w-[600px] sm:text-5xl sm:font-bold  md:max-w-full  max-w-[350px]  md:text-6xl  font-extrabold leading-[1.3em] md:leading-[1.1em] md:font-bold">
                Supercharge your web applications
              </h1>
              <p className="mb-5 max-w-[350px]  sm:max-w-[600px] text-[#707172] text-lg md:text-xl font-normal ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>

              <div className="">
                <a className="bg-[#6366F1] hover:bg-[#3a34b1] text-white font-bold text-normal md:text-lg px-5 py-3 rounded-md">
                  Documentation
                </a>
                <a className="px-5 py-3 inline-flex items-center gap-x-1 font-bold text-lg text-gray-600">
                  View on GitHub <LuArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full border-2  md:max-w-[40%] hidden  md:ml-20  bg-[#6366F1] relative md:flex items-end justify-end md:rounded-2xl">
            <div className="box  w-[93%] h-[90%] mt-14 bg-[#111827] rounded-tl-2xl  overflow-hidden">
              <div className=" flex space-x-10 border-gray-400 border-b mb-5 ">
                <p className="text-white text-lg py-5 px-5 bg-[#222938] border-r border-gray-400 border-b">
                  NotificationSetting.jsx
                </p>
                <p className="text-white text-lg py-5 px-2 ">App.jsx</p>
              </div>
              <div>
                <SyntaxHighlighter language="jsx" style={customStyle}>
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-[50%] md:hidden  md:ml-20  bg-[#6366F1] relative flex items-end justify-end md:rounded-2xl">
          <div className="box  w-[93%] h-[90%] mt-14 bg-[#111827] rounded-tl-2xl  overflow-hidden">
            <div className=" flex space-x-10 border-gray-400 border-b mb-5 ">
              <p className="text-white text-lg py-5 px-5 bg-[#222938] border-r border-gray-400 border-b">
                NotificationSetting.jsx
              </p>
              <p className="text-white text-lg py-5 px-2 ">App.jsx</p>
            </div>
            <div>
              <SyntaxHighlighter language="jsx" style={customStyle}>
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeHero;
