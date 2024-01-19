"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SurveyContext } from "../Context/SurveyContextConstructor";
import LeftColumn from "../components/LeftColumn";

const Main = () => {
  const { basis, handleOnBasisChange } = useContext(SurveyContext);
  const router = useRouter();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (basis.name && basis.introduction && basis.manager) {
      // make the fetch post here
      router.push("/questions");
    }
  };

  return (
    <div className="bg-image">
      <div className="py-14 mx-auto w-4/5 h-full">
        <div className="flex h-5/6">
          {/* left column */}
          <LeftColumn />
          {/* right coloumn basic */}
          <div className="w-2/3">
            <form onSubmit={handleOnSubmit} className="h-full">
              <div className="continue-btn p-2 mb-12 text-right">
                <div
                  className={`dark-green inline p-2 rounded-md ${
                    basis.name && basis.introduction && basis.manager
                      ? ""
                      : "opacity-75"
                  }`}
                >
                  <button type="submit" className="text-white mr-1 uppercase">
                    continue{" "}
                    <img
                      src="/icons/rightArrow.png"
                      className="right-arrow inline"
                      alt="right arrow"
                    />
                  </button>
                </div>
              </div>
              <div className="relative h-full">
                <div className="content p-8 font-normal">
                  <div className="new-survey rounded-md h-full white-bg-80 py-3 px-8">
                    <h4 className="text-center text-3xl uppercase mb-2">
                      creating a new survey
                    </h4>
                    <p className="text-center uppercase text-xs medium-grey mb-10">
                      Еnter the following data and continue with the further
                      creation process
                    </p>

                    <label
                      htmlFor="survey-name"
                      className="uppercase text-base mb-2 block medium-grey"
                    >
                      enter the name of survey
                    </label>
                    <textarea
                      name="name"
                      id="survey-name"
                      cols={4}
                      rows={2}
                      className="w-full rounded-md survey-inputs mb-2 pl-1"
                      onChange={handleOnBasisChange}
                      value={basis.name}
                    ></textarea>
                    <label
                      htmlFor="survey-message"
                      className="uppercase text-base mb-2 block medium-grey"
                    >
                      enter the introductory message
                    </label>
                    <textarea
                      name="introduction"
                      id="survey-message"
                      cols={4}
                      rows={4}
                      className="w-full rounded-md survey-inputs mb-2 pl-1"
                      onChange={handleOnBasisChange}
                      value={basis.introduction}
                    ></textarea>
                    <label
                      htmlFor="survey-email"
                      className="uppercase text-base mb-2 block medium-grey"
                    >
                      enter the admin email
                    </label>
                    <textarea
                      name="manager"
                      id="survey-email"
                      cols={4}
                      rows={2}
                      className="w-full  rounded-md survey-inputs mb-2 pl-1"
                      onChange={handleOnBasisChange}
                      value={basis.manager}
                    ></textarea>

                    <p
                      className="uppercase text-center medium-grey"
                      style={{ fontSize: "10px" }}
                    >
                      Еnter the following data and continue with the further
                      creation process enter the following data and continue
                      with the further creation process enter the following data
                      and continue with the further creation process enter the
                      following data and continue with the further creation
                      process
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
