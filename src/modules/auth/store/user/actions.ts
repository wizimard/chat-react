import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser, signInParams, signUpParams } from "../../types";
import authApi from "../../api/authApi";
import constants from "@/constants/constants";

const signIn = createAsyncThunk<
  IUser,
  signInParams
>(
  'auth/signIn',
  async(data) => {
    const response = await authApi.signIn(data);

    localStorage.setItem(constants.token, response.data.accessToken);

    return response.data.user;
  }
);

const signUp = createAsyncThunk<
  IUser,
  signUpParams
>(
  'auth/signUp',
  async(data) => {
    const response = await authApi.signUp(data);

    localStorage.setItem(constants.token, response.data.accessToken);

    return response.data.user;
  }
);

const logout = createAsyncThunk<
  void,
  void
>(
  'auth/logout',
  async() => {
    await authApi.logout();

    localStorage.removeItem(constants.token);
  }
);

const getUser = createAsyncThunk<
  IUser,
  void
>(
  'auth/user',
  async() => {
    const response = await authApi.getUser();

    return response.data;
  }
);

const actions = {
  signIn,
  signUp,
  logout,
  getUser
}

export default actions;