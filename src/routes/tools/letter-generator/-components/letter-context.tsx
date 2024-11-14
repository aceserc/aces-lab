import type { ReactNode } from "react";

import React, { createContext, useContext, useEffect, useState } from "react";

import type { DeepPartial } from "@/types/helpers";
import type { LetterGeneratorFormSchema } from "@/zod/letter-generator";

type LetterContent = DeepPartial<LetterGeneratorFormSchema>;

interface LetterContextProps {
  letterContent: LetterContent;
  setLetterContent: React.Dispatch<React.SetStateAction<LetterContent>>;
}

export const DEFAULT_LETTER_CONTENT: LetterContent = {
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

export const LetterContext = createContext<LetterContextProps | null>(null);

interface LetterProviderProps {
  children: ReactNode;
}

export const LetterContextProvider: React.FC<LetterProviderProps> = ({ children }) => {
  const [letterContent, setLetterContent] = useState<LetterContent>(DEFAULT_LETTER_CONTENT);

  return (
    <LetterContext.Provider value={{ letterContent, setLetterContent }}>
      {children}
    </LetterContext.Provider>
  );
};

export const useLetterContext = () => {
  const context = useContext(LetterContext);

  if (!context) {
    throw new Error("useLetterContext must be used within a LetterProvider");
  }

  return context;
};