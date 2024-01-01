import { whatsnewJson } from "../../mock/home";

export const WhatsNew = () => {
  return (
    <div className="flex overflow-x-auto mt-6">
      {whatsnewJson.map((it: any, index) => {
        return (
          <div key={index} className="rounded-lg bg-tint_1 mr-5  lg:w-72 lg:h-80 w-44 h-52">
            <div className="card rounded-lg lg:p-4 p-2 text-center  lg:w-72 lg:h-80 w-44 h-52">
              <figure className="bg-slate-200">
                <img
                  src={it.img}
                  alt={it.title}
                  className="object-cover rounded-lg"
                />
              </figure>
              <div className="mt-3 text-text_1 font-light text-md">
                <p className="capitalize">{it.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
