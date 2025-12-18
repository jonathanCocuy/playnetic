"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function LoginHeader() {
    const [isExistingUser, setIsExistingUser] = useState(true);

    return (
        <div>
            <h1 className="text-7xl font-bold tracking-tight">
                Playnetic
            </h1>
            <p className="text-lg mt-4">
                Plataforma de juegos educativos
            </p>
            <Button variant="purple" onClick={() => setIsExistingUser(!isExistingUser)}>
                {isExistingUser ? "Crear cuenta" : "Iniciar sesión"}
            </Button>
        </div>
    );
}