import { useState } from "react";
import { createContext } from "react";

export const ModeContext = createContext();

export default function ModeContextProvider({ children }) {
  const [mode, setMode] = useState(false);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
