import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types"
import actions from "./actions";
import { AxiosError } from "axios";

type UserState = {
  user: IUser | null;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: ''
}

function clearState(state: UserState) {
  state.user = null;
  state.isLoading = true;
  state.error = '';
}
function authFullfilled(state: UserState, user: IUser) {
  state.user = user;
  state.isLoading = false;
}
function authError(state: UserState, error: SerializedError) {
  state.error = error.message ?? 'Something wrong...'
  state.isLoading = false;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(actions.signIn.pending, clearState);
    builder.addCase(actions.signIn.fulfilled, (state, action) => {
      authFullfilled(state, action.payload);
    });
    builder.addCase(actions.signIn.rejected, (state, action) => {
      authError(state, action.error);
    });

    builder.addCase(actions.signUp.pending, clearState);
    builder.addCase(actions.signUp.fulfilled, (state, action) => {
      authFullfilled(state, action.payload);
    });
    builder.addCase(actions.signUp.rejected, (state, action) => {
      authError(state, action.error);
    });
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;