import { RootState } from "@/modules/core";

export default {
  useUser: (state: RootState) =>
    state.user.user,
  useState: (state: RootState) =>
    state.user
}