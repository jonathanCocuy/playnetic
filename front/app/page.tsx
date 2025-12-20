"use client";

import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans font-family-rubik dark:bg-black">
        Hola
        <Button variant="light" onClick={handleLogout}>Logout</Button>
    </div>
  );
}
