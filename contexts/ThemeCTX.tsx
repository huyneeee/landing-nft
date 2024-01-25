"use client";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type IMode = "light" | "dark";

type IThemeContext = {
  mode: IMode;
  onChangeMode: (mode: IMode) => void; // eslint-disable-line no-unused-vars
};

export const ThemeContext = createContext<IThemeContext>({
  mode: "light",
  onChangeMode: () => {}
});

export const ThemeProvider = (props: PropsWithChildren) => {
  const [mode, setMode] = useState<IMode>("light");

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "dark" : "light";
      handleChangeMode(newColorScheme);
    });
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", () => {});
    };
  }, []);

  useEffect(() => {
    const isDarkMode =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const _mode = isDarkMode ? "dark" : "light";
    handleChangeMode(_mode);
  }, []);

  const onChangeDocument = (mode: IMode) => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      return;
    }
    document.documentElement.classList.remove("dark");
  };

  const handleChangeMode = (mode: IMode) => {
    onChangeDocument(mode);
    setMode(mode);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        onChangeMode: handleChangeMode
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useThemeCTX = () => {
  const themeState = useContext(ThemeContext);
  if (typeof themeState === "undefined") {
    throw new Error("You must be used withing a provider");
  }
  return themeState;
};
