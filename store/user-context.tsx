import { createContext } from "react";

import { User } from "@/models/user";

export const UserContext = createContext({
  user: {} as User,
  setUser: (_newUser: User) => {},
});
