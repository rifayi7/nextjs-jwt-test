"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const SECRET = process.env.JWT_SECRET || "my-secret";

export async function loginSubmit(prevstate: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 3600,
    });
    redirect("/premium");
  }
  return { error: "invalid credentials" };
}
