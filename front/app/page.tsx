"use client";

import Link from "next/link";
import LoginHeader from "./(auth)/login/components/LoginHeader";
import LoginForm from "./(auth)/login/components/LoginForm";
import PrismaticBackground from "@/components/backgrounds/LiquidEtherBackground";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans font-family-rubik dark:bg-black">
        <PrismaticBackground />
        <div className="flex flex-col items-center justify-center h-screen absolute top-0 left-0 w-full h-full">
          <LoginForm />
        </div>
    </div>
  );
}
