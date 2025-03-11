import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrientationState {
  selectedOrientation: string | null;
}

const initialState: OrientationState = {
  selectedOrientation: null,
};

const orientationSlice = createSlice({
  name: "orientation",
  initialState,
  reducers: {
    setSelectedOrientation: (state, action: PayloadAction<string | null>) => {
      state.selectedOrientation = action.payload;
    },
  },
});

export const { setSelectedOrientation } = orientationSlice.actions;
export default orientationSlice.reducer;
