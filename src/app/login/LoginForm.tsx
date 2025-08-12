"use client";
import React, { useActionState } from "react";
import { useFormState } from "react-dom";
import { loginSubmit } from "./actions";

export default function LoginForm() {
  const [state, formAction] = useActionState(loginSubmit, { error: "" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <p className="p-3">
          username and password must be
          <span className="text-2xl font-bold"> admin</span>{" "}
        </p>
        <form action={formAction} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SubmitButton />
        </form>
        {state?.error && (
          <p className="mt-4 text-center text-red-500 text-sm">{state.error}</p>
        )}
      </div>
    </div>
  );
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
    >
      Login
    </button>
  );
}
