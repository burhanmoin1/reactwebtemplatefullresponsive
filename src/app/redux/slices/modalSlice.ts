import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
      isModalOpen: false,
      modalContent: 'default',
    },
    reducers: {
      setIsModalOpen: (state, action) => {
        state.isModalOpen = action.payload;
      },
      setModalContent: (state, action) => {
        state.modalContent = action.payload;
      },
    },
  });
  
  export const { setIsModalOpen, setModalContent } = modalSlice.actions;
  export default modalSlice.reducer;