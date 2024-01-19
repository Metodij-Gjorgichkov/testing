"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LeftColumn from "../components/LeftColumn";

const Questions = () => {
  const [createQuestion, setCreateQuestion] = useState<boolean>(true);
  const [enterQuestion, setEnterQuestion] = useState<boolean>(false);
  const router = useRouter();

  const handleCreateQuestion = () => {
    setCreateQuestion(false);
    setEnterQuestion(true);
  };

  return (
    <div className="bg-image">
      <div className="py-14 mx-auto w-4/5 h-full">
        <div className="flex h-5/6">
          {/* left column */}
          <LeftColumn />
          {/* right coloumn basic */}
          <div className="w-2/3">
            <form className="h-full">
              <div className="flex justify-between items-center mb-12">
                <Link href={"/"}>
                  <div className="light-mint-green flex justify-center items-center p-2 rounded-md">
                    <img
                      src="/icons/leftArrow.png"
                      alt="left arrow"
                      className="left-arrow inline mr-1"
                    />{" "}
                    <button className="uppercase">back</button>
                  </div>
                </Link>
                <div className="dark-green inline p-2 rounded-md">
                  <Link href={"/emails"}>
                    <div className="flex justify-between items-center">
                      <button type="submit" className="text-white uppercase">
                        continue
                      </button>
                      <img
                        src="/icons/rightArrow.png"
                        className="right-arrow inline ml-1"
                        alt="right arrow"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative h-full">
                <div className="content p-8 font-normal">
                  <h4 className="dim-gray text-center text-2xl uppercase mb-4">
                    survey questions
                  </h4>
                  {createQuestion && (
                    <div className="create-survey text-center rounded-md white-bg-80 py-3 px-8 mb-3">
                      <h4
                        className="davys-grey uppercase cursor-pointer"
                        onClick={handleCreateQuestion}
                      >
                        create question +
                      </h4>
                    </div>
                  )}

                  {enterQuestion && (
                    <div className="create-question text-center rounded-md white-bg-80 py-3 px-8">
                      <h4 className="davys-grey uppercase">
                        creating a new question
                      </h4>
                      <p className="medium-grey uppercase text-xs mb-4">
                        Еnter the question and continue with the further
                        creation process
                      </p>

                      <textarea
                        name="enterQuestion"
                        id="enter-question"
                        className="textarea-inputs-bg w-full rounded-md p-3 text-xl mb-2"
                        cols={20}
                        rows={4}
                        placeholder="ENTER THE QUESTION"
                      ></textarea>

                      {/* mandatory */}
                      <div className="text-left pl-3">
                        <label
                          htmlFor="mandatory"
                          className="uppercase mr-2 medium-grey"
                        >
                          mandatory
                        </label>
                        <input type="checkbox" id="mandatory" />
                      </div>

                      {/* right btns */}
                      <div className="text-right">
                        <a className="bg-white medium-grey mr-2 rounded-md px-3 py-2 uppercase">
                          cancel
                        </a>
                        <a className="bg-white medium-grey rounded-md px-3 py-2 uppercase">
                          continue
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
