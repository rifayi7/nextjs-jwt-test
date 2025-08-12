import Link from "next/link";
import React from "react";

export default function Welcome() {
  return (
    <div className=" flex justify-center min-h-screen items-center ">
      <div>
        <h1 className="text-3xl">Its a login test App</h1>
        <Link href="/login">
          <p>Click me to go login page</p>
        </Link>
      </div>
    </div>
  );
}
