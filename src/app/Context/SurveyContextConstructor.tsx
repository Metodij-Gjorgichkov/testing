"use client";
import React, { createContext, useState } from "react";
interface BasisType {
  name: string;
  introduction: string;
  manager: string;
  status: "DRAFT";
}

interface SurveyType {
  basis: BasisType;
  handleOnBasisChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const SurveyContext = createContext({
  basis: {
    name: "",
    introduction: "",
    manager: "",
    status: "DRAFT",
  },
  handleOnBasisChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => {},
});

interface Props {
  children: React.ReactNode;
}

const SurveyContextConstructor = ({ children }: Props) => {
  const [basis, setBasis] = useState<BasisType>({
    name: "",
    introduction: "",
    manager: "",
    status: "DRAFT",
  });

  const handleOnBasisChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setBasis({
      ...basis,
      [name]: value,
    });
  };

  console.log(basis);
  return (
    <SurveyContext.Provider
      value={{
        basis,
        handleOnBasisChange,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export default SurveyContextConstructor;
