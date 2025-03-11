import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the state
interface ImageState {
  savedImages: string[]; // Array of image IDs
  savingImages: string[]; // Array of image IDs being saved
  unsavingImages: string[]; // Array of image IDs being unsaved
}

// Initial state
const initialState: ImageState = {
  savedImages: [],
  savingImages: [],
  unsavingImages: [],
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setSavedImages(state, action: PayloadAction<string[]>) {
      state.savedImages = action.payload;
      localStorage.setItem('saved_images', JSON.stringify(state.savedImages));
    },
    addSavingImage(state, action: PayloadAction<string>) {
      if (!state.savingImages.includes(action.payload)) {
        state.savingImages.push(action.payload);
      }
    },
    removeSavingImage(state, action: PayloadAction<string>) {
      state.savingImages = state.savingImages.filter((id) => id !== action.payload);
    },
    addSavedImage(state, action: PayloadAction<string>) {
      if (!state.savedImages.includes(action.payload)) {
        state.savedImages.push(action.payload);
        localStorage.setItem('saved_images', JSON.stringify(state.savedImages));
      }
    },
    removeSavedImage(state, action: PayloadAction<string>) {
      state.savedImages = state.savedImages.filter((id) => id !== action.payload);
      localStorage.setItem('saved_images', JSON.stringify(state.savedImages));
    },
    addUnsavingImage(state, action: PayloadAction<string>) {
      if (!state.unsavingImages.includes(action.payload)) {
        state.unsavingImages.push(action.payload);
      }
    },
    removeUnsavingImage(state, action: PayloadAction<string>) {
      state.unsavingImages = state.unsavingImages.filter((id) => id !== action.payload);
    },
    resetSavedImages(state) {
      state.savedImages = [];
      localStorage.removeItem('saved_images');
    },
  },
});

export const {
  setSavedImages,
  addSavingImage,
  removeSavingImage,
  addSavedImage,
  removeSavedImage,
  addUnsavingImage,
  removeUnsavingImage,
  resetSavedImages,
} = imageSlice.actions;

export default imageSlice.reducer;
