import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
      email: null,
      name: null,
      authId: null,
      authIdGot: false,
    },
    reducers: {
      setUserData: (state, action) => {
        state.email = action.payload.email;
        state.name = action.payload.name;
      },
      setAuthId: (state, action) => {
        state.authId = action.payload.authId;
      },
      setAuthIdGot: (state) => {
        state.authIdGot = true;
      },
    },
  });
  
  export const { setUserData, setAuthIdGot , setAuthId } = userSlice.actions;
  export default userSlice.reducer;