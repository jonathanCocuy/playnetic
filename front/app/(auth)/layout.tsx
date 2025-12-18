"use client";

import PrismaticBackground from "@/components/backgrounds/LiquidEtherBackground";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <PrismaticBackground />
            {children}
        </div>
    );
}