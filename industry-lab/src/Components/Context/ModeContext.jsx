import { useState, useEffect } from "react";
import { createContext } from "react";

export const ModeContext = createContext();

export default function ModeContextProvider({ children }) {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    getMode();
  }, []);

  const getMode = async () => {
    const request = await fetch("https://industry-lab-backend.onrender.com/information");
    const response = await request.json();
    setMode(response.mode);
  };

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
