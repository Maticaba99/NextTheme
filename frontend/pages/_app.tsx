import "../styles/globals.css";
import { TemaProvider, theme, ThemeInterface } from "@/contexts/themes";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [current, setCurrent] = useState<ThemeInterface>(theme.default);
  useEffect(() => {
    const baseTheme = process.env.THEME;
    const setTheme = (e) => {
      if (theme[e] === undefined) {
        return theme["default"];
      } else {
        return theme[e];
      }
    };
    const c = setTheme(baseTheme);
    setCurrent(c);
  }, []);
  return (
    <>
      <TemaProvider value={current}>
        <Component {...pageProps} change={setCurrent} />
      </TemaProvider>
    </>
  );
}

export default MyApp;
