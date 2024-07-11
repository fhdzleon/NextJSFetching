"use client";

import Link from "next/link";
import LoginForm from "@/components/LoginForm/LoginForm";
import { useState } from "react";
import Logout from "@/components/Logout/Logout";

export default function Home() {
  const [token, setToken] = useState(address.getItem("userToken") ?? null);

  return (
    <main className="flex flex-col items-center justify-around min-h-screen p-24">
      <h1 className="text-4xl font-bold text-center">
        {" "}
        Aprendiendo Data Fetching - soyHenry{" "}
      </h1>
      {token ? (
        <nav className="flex gap-3 text-xl">
          <Link href={"/products"}> Products </Link>
          <Link href={"/products/categories"}> Categories </Link>
          <Link href={"/products/1"}> Product detail </Link>

          <Logout token={token} setToken={setToken} />
        </nav>
      ) : (
        <LoginForm token={token} setToken={setToken} />
      )}
    </main>
  );
}
