import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../models';
import {RootState} from '../../app';
interface AuthState {
  isLoggedIn: boolean;
  currentUser?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    removeUser: state => {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// Actions
export const authActions = authSlice.actions;
// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
