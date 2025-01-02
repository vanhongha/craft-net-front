"use server";

import { z } from "zod";
import { redirect } from "next/navigation";

import { createSession, deleteSession } from "@/lib/session";

const testUser = {
  username: "username",
  password: "123456",
};

const loginSchema = z.object({
  username: z.string().trim(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .trim(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {
  const dataFields = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  if (!dataFields.username || !dataFields.password) {
    return {
      dataFields,
      errors: {
        password: ["Please input username and password"],
      },
    };
  }

  const parseResult = loginSchema.safeParse(Object.fromEntries(formData));

  if (!parseResult.success) {
    return {
      dataFields,
      errors: parseResult.error.flatten().fieldErrors,
    };
  }

  const { username, password } = parseResult.data;

  if (username !== testUser.username || password !== testUser.password) {
    return {
      dataFields,
      errors: {
        password: ["Invalid username or password"],
      },
    };
  }

  await createSession(testUser.username);

  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
