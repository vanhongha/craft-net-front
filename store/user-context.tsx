import { createContext } from "react";

import { IUser, User } from "@/models/user";

export const UserContext = createContext({
  user: {} as User,
  setUser: (_newUser: IUser) => {},
});
