import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: any;
  isAuthenticated: boolean;
  user: { email?: string } | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    user: null,
    name: undefined
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string, data:any }>) => {
      state.isAuthenticated = true;
      state.user = { email: action.payload.email };
      
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
