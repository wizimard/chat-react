import { $authedApi, $commonApi } from "@/modules/core";
import { IUser, signInParams, signInResponse, signUpParams, signUpResponse } from "../types";

const authApi = {
  async signIn(data: signInParams) {
    return await $commonApi.post<signInResponse>('/auth/signin', data);
  },
  async signUp(data: signUpParams) {
    return await $commonApi.post<signUpResponse>('/auth/signup', data);
  },
  async logout() {
    return await $authedApi.get<void>('/auth/logout');
  },
  async refresh() {
    return await $authedApi.get<string>('/auth/refresh');
  },
  async getUser() {
    return await $authedApi.get<IUser>('/auth/user');
  }
}

export default authApi;