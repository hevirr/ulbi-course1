import { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>Эбаут</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path={"/about"} element={<MainPageAsync />} />
          <Route path={"/"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
