import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { SetUserPayload } from "src/redux/reducer/@types";

type InitialType = {
  email: string | null;
  token: string | null;
  id: string | null;
};
const initialState: InitialType = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      { payload: { email, token, id} }: PayloadAction<SetUserPayload>
    ) => {
      state.email = email;
      state.token = token;
      state.id = id;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

