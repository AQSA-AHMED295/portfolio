const Tile = () => {
  return (
    <>
    <div className="tile overflow-hidden bg-slate-200/50 border-slate-500/50 border-[2px] lg:h-[28vw] md:h-[34vw] lg:w-[24vw] md:w-[28vw] sm:w-6/12 w-[58vw] rounded-xl lg:py-2 lg:px-2">
      <div className="set py-4 text-md tracking-tight text-[18px]">
        <p>front-end</p>
      </div>
      <div className="skillsList w-full h-4/12 grid grid-cols-2 grid-rows-4 gap-4 py-4">
        <div className="rounded-lg relative">
          <i className="ri-checkbox-circle-line text-xs absolute -top-2 left-6"></i>
          <p className="inline">HTML</p>
          <p className="text-xs">Intermediate</p>
        </div>
        <div className="rounded-lg relative">
          <i className="ri-checkbox-circle-line text-xs absolute -top-2 left-6"></i>
          <p className="inline">CSS</p>
          <p className="text-xs">Expert</p>
        </div>
        <div className="rounded-lg relative">
          <i className="ri-checkbox-circle-line text-xs absolute -top-2 left-6"></i>
          <p className="inline">JS</p>
          <p className="text-xs">Intermediate</p>
        </div>
        <div className="rounded-lg relative">
          <i className="ri-checkbox-circle-line text-xs absolute -top-2 left-6"></i>
          <p className="inline">React</p>
          <p className="text-xs">Intermediate</p>
        </div>
        <div className="rounded-lg relative">
          <i className="ri-checkbox-circle-line text-xs absolute -top-2 left-6"></i>
          <p className="inline">Next</p>
          <p className="text-xs">intermediate</p>
        </div>
        <div className="rounded-lg relative">
          <i className="ri-checkbox-circle-line text-xs absolute -top-2 left-6"></i>
          <p className="inline">TS</p>
          <p className="text-xs">Intermediate</p>
        </div>
        <div className="rounded-lg relative">
          <i className="ri-checkbox-circle-line text-xs absolute -top-2 left-6"></i>
          <p className="inline">Tailwind</p>
          <p className="text-xs">Expert</p>
        </div>
      </div>
    </div>

   
    </>
  );
};

export default Tile;
