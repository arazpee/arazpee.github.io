import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MapState {
  longitude: number;
  latitude: number;
  zoom: number;
}

const initialState: MapState = {
  longitude: 100.495794,
  latitude: 13.762512,
  zoom: 14,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<MapState>) => {
      state.longitude = action.payload.longitude;
      state.latitude = action.payload.latitude;
      state.zoom = action.payload.zoom;
    },
    // decrement: (state) => {
    //   state.map -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { changeLocation } = mapSlice.actions;

export default mapSlice.reducer;
