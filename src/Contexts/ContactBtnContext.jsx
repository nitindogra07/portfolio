import { createContext, useEffect, useState } from "react";

export const FormBtnContext = createContext();

export default function ButtonContext({ children }) {
  const [IsClicked, SetIsClicked] = useState(false);

  const IsOpened = () => SetIsClicked(true);
  const IsClosed = () => SetIsClicked(false);

  useEffect(() => {
    if (IsClicked) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto";
    }
  }, [IsClicked]);

  return (
    <FormBtnContext.Provider value={{ IsClicked, IsOpened, IsClosed }}>
      {children}
    </FormBtnContext.Provider>
  );
}
