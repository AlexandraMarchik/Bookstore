import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { SetUserPayload } from "src/redux/reducer/@types";

type InitialType = {
  name:string| null;
  email: string | null;
  token: string | null;
  id: string | null;
};
const initialState: InitialType = {
  name:null,
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
      { payload: { email, token, id,name} }: PayloadAction<SetUserPayload>
    ) => {
      state.email = email;
      state.token = token;
      state.id = id;
      state.name = name
    },
    removeUser: (state) => {
      state.name = null
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

