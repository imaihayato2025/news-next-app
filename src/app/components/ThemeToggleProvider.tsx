"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type ThemeContextType = {
  toggleColorMode: () => void;
  mode: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeMode must be used within ThemeToggleProvider");
  return context;
}

export default function ThemeToggleProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
