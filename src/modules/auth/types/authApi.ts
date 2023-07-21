import IUser from "./IUser";

export type signInParams = {
  email: string;
  password: string;
}
export type signUpParams = signInParams & {
  username: string;
}
export type signInResponse = {
  user: IUser;
  accessToken: string;
}
export type signUpResponse = signInResponse;