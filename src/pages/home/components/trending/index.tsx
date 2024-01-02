export const Trending = ({ data }: any) => {
  return (
    <div id="trending">
      <div className="grid grid-cols-3 grid-rows-3 lg:h-100v h-60v gap-x-2 gap-y-10">
        <div className="row-span-2 bg-white relative rounded-xl flex justify-center">
          <img
            src={`${data[0].img}`}
            alt={`${data[0].title}`}
            className="object-cover h-full w-full z-40 relative rounded-xl"
          />
          <img
            src={`${data[0].bg}`}
            alt={`${data[0].title}`}
            className="object-fill h-full w-full absolute bottom-0 left-0 z-0 opacity-40 rounded-xl"
          />
          <h4 className="font-semibold text-center text-black absolute bottom-0 lg:p-4 p-1 bg-white z-40 lg:rounded-tl-3xl rounded-tl-lg lg:rounded-tr-3xl rounded-tr-lg w-3/4 lg:text-lg text-xs">
            {data[0].title}
          </h4>
        </div>
        <div className="col-start-1 row-start-3  bg-slate-300 relative rounded-xl flex justify-center">
          <img
            src={`${data[1].img}`}
            alt={`${data[1].title}`}
            className="object-cover h-full w-full z-40 relative rounded-xl"
          />
          <img
            src={`${data[1].bg}`}
            alt={`${data[1].title}`}
            className="object-fill h-full w-full absolute bottom-0 left-0 z-0 opacity-40 rounded-xl"
          />
          <h4 className="font-semibold text-center text-black absolute bottom-0 lg:p-4 p-1 bg-white z-40 lg:rounded-tl-3xl rounded-tl-lg lg:rounded-tr-3xl rounded-tr-lg w-3/4 lg:text-lg text-xs">
            {data[1].title}
          </h4>
        </div>
        <div className="col-start-2 row-start-1  bg-slate-300 relative rounded-xl flex justify-center">
          <img
            src={`${data[2].img}`}
            alt={`${data[2].title}`}
            className="object-cover h-full w-full z-40 relative rounded-xl"
          />
          <img
            src={`${data[2].bg}`}
            alt={`${data[2].title}`}
            className="object-fill h-full w-full absolute bottom-0 left-0 z-0 opacity-40 rounded-xl"
          />
          <h4 className="font-semibold text-center text-black absolute bottom-0 lg:p-4 p-1 bg-white z-40 lg:rounded-tl-3xl rounded-tl-lg lg:rounded-tr-3xl rounded-tr-lg w-3/4 lg:text-lg text-xs">
            {data[2].title}
          </h4>
        </div>
        <div className="row-span-2 col-start-2 row-start-2  bg-slate-300 relative rounded-xl flex justify-center">
          <img
            src={`${data[3].img}`}
            alt={`${data[3].title}`}
            className="object-cover h-full w-full z-40 relative rounded-xl"
          />
          <img
            src={`${data[3].bg}`}
            alt={`${data[3].title}`}
            className="object-fill h-full w-full absolute bottom-0 left-0 z-0 opacity-40 rounded-xl"
          />
          <h4 className="font-semibold text-center text-black absolute bottom-0 lg:p-4 p-1 bg-white z-40 lg:rounded-tl-3xl rounded-tl-lg lg:rounded-tr-3xl rounded-tr-lg w-3/4 lg:text-lg text-xs">
            {data[3].title}
          </h4>
        </div>
        <div className="row-span-2 col-start-3 row-start-1  bg-slate-300 relative rounded-xl flex justify-center">
          <img
            src={`${data[4].img}`}
            alt={`${data[4].title}`}
            className="object-cover h-full w-full z-40 relative rounded-xl"
          />
          <img
            src={`${data[4].bg}`}
            alt={`${data[4].title}`}
            className="object-fill h-full w-full absolute bottom-0 left-0 z-0 opacity-40 rounded-xl"
          />
          <h4 className="font-semibold text-center text-black absolute bottom-0 lg:p-4 p-1 bg-white z-40 lg:rounded-tl-3xl rounded-tl-lg lg:rounded-tr-3xl rounded-tr-lg w-3/4 lg:text-lg text-xs">
            {data[4].title}
          </h4>
        </div>
        <div className="col-start-3 row-start-3  bg-slate-300 relative rounded-xl flex justify-center">
          <img
            src={`${data[5].img}`}
            alt={`${data[5].title}`}
            className="object-cover h-full w-full z-40 relative rounded-xl"
          />
          <img
            src={`${data[5].bg}`}
            alt={`${data[5].title}`}
            className="object-fill h-full w-full absolute bottom-0 left-0 z-0 opacity-40 rounded-xl"
          />
          <h4 className="font-semibold text-center text-black absolute bottom-0 lg:p-4 p-1 bg-white z-40 lg:rounded-tl-3xl rounded-tl-lg lg:rounded-tr-3xl rounded-tr-lg w-3/4 lg:text-lg text-xs">
            {data[5].title}
          </h4>
        </div>
      </div>
    </div>
  );
};
