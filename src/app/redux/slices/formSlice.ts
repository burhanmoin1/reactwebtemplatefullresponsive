import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the FormState type (structure of the form data)
export interface FormState {
  first_name: string;
  last_name: string;
}

// Define the payload type for setFormData action
export interface SetFormDataPayload {
  name: keyof FormState;  // name must be a key of FormState
  value: string;           // the value will be a string
}

// Define the formSlice
const formSlice = createSlice({
  name: 'form',
  initialState: {
    first_name: '',
    last_name: '',
  } as FormState,  // explicitly typing the state as FormState
  reducers: {
    setFormData: (state, action: PayloadAction<SetFormDataPayload>) => {
      const { name, value } = action.payload;
      state[name] = value;  // update the corresponding field in the state
    },
    resetFormData: () => ({
      first_name: '',
      last_name: '',
    }),
  },
});

export const { setFormData, resetFormData } = formSlice.actions;

export default formSlice.reducer;
