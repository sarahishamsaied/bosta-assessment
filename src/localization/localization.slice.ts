import { createSlice } from "@reduxjs/toolkit";
import i18n from "./i18n"; // Assuming i18n.js is set up as previously described

interface InitialState {
  language: "en" | "ar";
}

// Initial state with default language set to English
const initialState: InitialState = {
  language: "en",
};

// Slice for localization features
export const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      // Change the language in i18next as well
      i18n.changeLanguage(action.payload);
    },
  },
});

// Action creators are generated for each reducer function
export const { setLanguage } = localizationSlice.actions;

export default localizationSlice.reducer;
