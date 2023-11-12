import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface markLocation {
  longitude: number;
  latitude: number;
}

const initialState: markLocation = {
  longitude: 2.2945,
  latitude: 48.8584,
};

export const mapSlice = createSlice({
  name: "markLocation",
  initialState,
  reducers: {
    changeMarkLocation: (state, action: PayloadAction<markLocation>) => {
      state.longitude = action.payload.longitude;
      state.latitude = action.payload.latitude;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMarkLocation } = mapSlice.actions;

export default mapSlice.reducer;
