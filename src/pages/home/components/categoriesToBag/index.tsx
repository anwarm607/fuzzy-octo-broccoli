import { categoriesToBagJson } from "../../mock/home";

export const CategoriesToBag = () => {
  const VerticalSplit = ({ data }: any) => {
    return (
      <div className="flex overflow-x-auto">
        {data.slice(0, 9).map((it: any, index: any) => {
          return (
            <div
              key={index}
              className="rounded-lg  mr-5  lg:w-72 lg:h-80 w-44 h-52"
            >
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

  return (
    <div className="mt-6">
      <VerticalSplit data={categoriesToBagJson.slice(0, 9)} />
      <VerticalSplit data={categoriesToBagJson.slice(9, 18)} />
    </div>
  );
};
