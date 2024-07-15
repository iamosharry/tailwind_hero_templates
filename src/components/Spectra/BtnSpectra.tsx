const BtnSpectra = () => {
  return (
    <>
      <div className="bg-blue-950 p-10 text-center">
        <button className="group relative px-4 py-2  font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300">
          <span>Hover Me</span>
          <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

          {/* RIGHT */}
          <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

          {/* BOTTOM */}
          <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

          <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
      </div>
    </>
  );
};

export default BtnSpectra;
