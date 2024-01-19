"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LeftColumn from "../components/LeftColumn";

const Emails = () => {
  const [createEmail, setCreateEmail] = useState<boolean>(true);
  const [enterEmail, setEnterEmail] = useState<boolean>(false);
  const router = useRouter();

  const handleCreateEmail = () => {
    setCreateEmail(false);
    setEnterEmail(true);
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
                <Link href={"/questions"}>
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
                    survey emails
                  </h4>
                  {createEmail && (
                    <div className="create-survey text-center rounded-md white-bg-80 py-3 px-8 mb-3">
                      <h4
                        className="davys-grey uppercase cursor-pointer"
                        onClick={handleCreateEmail}
                      >
                        add email +
                      </h4>
                    </div>
                  )}

                  {enterEmail && (
                    <div className="create-question text-center rounded-md white-bg-80 py-3 px-8">
                      <h4 className="davys-grey uppercase">Add a new email</h4>
                      <p className="medium-grey uppercase text-xs mb-4">
                        Add the email and continue with the further creation
                        process
                      </p>
                      <div className="flex justify-between items-center">
                        <input
                          type="email"
                          placeholder="EMAIL"
                          className="textarea-inputs-bg w-2/4 h-10 pl-2 rounded-md"
                        />
                        <div>
                          <a className="bg-white medium-grey mr-2 rounded-md px-3 py-2 uppercase">
                            cancel
                          </a>
                          <a className="bg-white medium-grey rounded-md px-3 py-2 uppercase">
                            continue
                          </a>
                        </div>
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

export default Emails;
