import type { ReactNode } from "react";

import React, { createContext, useContext, useState } from "react";

import type { DeepPartial } from "@/types/helpers";

type LetterContent = DeepPartial<{
  headers: {
    heading: string;
    subHeading: string;
    estd: string;
  };
  refNo: number;
  logos: {
    leftLogo: string;
    rightLogo: string;
  };
  content: {
    date: string;
    recipientsInfo: string;
    subject: string;
    greetings: string;
    body: string;
  };
  signatureBlock: {
    signatureUrl: string;
    name: string;
    position: string;
  };
  email: string;
}>;

interface LetterContextProps {
  letterContent: LetterContent;
  setLetterContent: React.Dispatch<React.SetStateAction<LetterContent>>;
}

const DEFAULT_LETTER_CONTENT: LetterContent = {
  headers: {
    heading: "Association of Computer \n Engineering Students (ACES)",
    subHeading: "IOE Purwanchal Campus, Dharan-8",
    estd: "2070",
  },
  logos: {
    leftLogo: "https://www.aceserc.org/logo.png",
    rightLogo: "http://localhost:5173/tu.png",
  },
  content: {
    date: new Date().toString(),
    greetings: "महोदय,",
    recipientsInfo: "श्रीमान्/श्रीमती...",
    body: "उपर्युक्त सम्बन्धमा ...",
    subject: "...",
  },
  email: "aces@ioepc.edu.np",

};

export const LetterContext = createContext<LetterContextProps>({
  letterContent: DEFAULT_LETTER_CONTENT,
  setLetterContent: () => {},
});

interface LetterProviderProps {
  children: ReactNode;
}

export const LetterProvider: React.FC<LetterProviderProps> = ({ children }) => {
  const [letterContent, setLetterContent] = useState<LetterContent>(DEFAULT_LETTER_CONTENT);

  return (
    <LetterContext.Provider value={{ letterContent, setLetterContent }}>
      {children}
    </LetterContext.Provider>
  );
};

export const useLetterContext = () => useContext(LetterContext);
