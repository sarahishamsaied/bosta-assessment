import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { setLanguage } from "./localization/localization.slice";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import TrackShimpment from "./screens/TrackShimpment/TrackShipment";
import GlobalStyles from "./styles/GlobalStyles";
import { useTranslation } from "react-i18next";

function App() {
  const language = useSelector(
    (state: RootState) => state.localization.language
  );

  return (
    <>
      <GlobalStyles language={language} />
      <Routes>
        <Route path="/" element={<TrackShimpment />} />
        <Route path="/track-shipment/:id" element={<TrackShimpment />} />
      </Routes>
    </>
  );
}

export default App;
