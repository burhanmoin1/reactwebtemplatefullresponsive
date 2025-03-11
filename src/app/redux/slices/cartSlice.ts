import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface CartState {
  count: number;
}

const initialState: CartState = {
  count: 0,
};

// Async Thunk to fetch cart count
export const fetchCartCount = createAsyncThunk('cart/fetchCartCount', async () => {
  const session_id = Cookies.get('session_id');
  if (!session_id) return 0;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_basket`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id }),
    });

    const data = await response.json();
    if (data.order_lines) {
      return data.order_lines.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);
    }
  } catch (error) {
    console.error('Error fetching basket:', error);
  }
  return 0;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartCount: (state, action) => {
      state.count = action.payload;
    },
    incrementCartCount: (state) => {
        state.count += 1; // ✅ Simply increase the cart count by 1
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartCount.fulfilled, (state, action) => {
      state.count = action.payload;
    });
  },
});

export const { setCartCount, incrementCartCount } = cartSlice.actions;
export default cartSlice.reducer;
