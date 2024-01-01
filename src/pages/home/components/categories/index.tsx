import {categoriesJson} from "../../mock/home";

export const Categories = () => {
  return (
    <div className="flex lg:justify-between w-full overflow-x-auto">
      {categoriesJson.map((it: any) => {
        return (
          <div className="text-center m-3">
            <div className="rounded-md bg-gray-100">
            <div className="card w-20 h-20 lg:w-28 lg:h-28 rounded-md">
              <figure>
                <img src={it.img} alt={it.title} className="object-fill rounded-md" />
              </figure>
              </div>
            </div>
            <div className="mt-3 text-text_1 font-light text-sm">
              <p>{it.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
