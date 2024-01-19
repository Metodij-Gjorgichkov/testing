import React from "react";
import { leftColumnType } from "../utils/utils";
import { usePathname, useRouter } from "next/navigation";

const LeftColumn = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-1/3 mr-10">
      <h1 className="dim-gray mb-12 text-center text-4xl">KFK Surveys</h1>

      <div className="relative h-full">
        <div className="content px-4 pt-4">
          <h3 className="dim-gray text-2xl uppercase text-center mb-5">
            survey info
          </h3>

          {leftColumnType.map((typ, index) => {
            return (
              <div
                key={index}
                className={`flex justify-between white-bg-80 uppercase rounded-2xl py-2 px-5 mt-4 ${
                  typ.title.toLowerCase() === pathname.substring(1)
                    ? "active-green"
                    : ""
                }`}
              >
                <span
                  className={`${
                    typ.title === pathname.substring(1)
                      ? "text-white"
                      : "davys-grey"
                  }`}
                >
                  {typ.title}
                </span>
                <span
                  onClick={() => {
                    router.push(`/${typ.title}`);
                  }}
                  className={`edit-span rounded-md px-3 cursor-pointer ${
                    typ.title === pathname.substring(1)
                      ? "cyan-green text-white"
                      : "medium-grey"
                  }`}
                >
                  {typ.edit}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
