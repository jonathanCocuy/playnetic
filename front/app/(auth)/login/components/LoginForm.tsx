"use client";

import Link from "next/link";
import { useState } from "react";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            setError(error.message || "Error al iniciar sesión");
        } else {
            router.push("/");
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background-light rounded-lg p-8 gap-4">
            <h3 className="text-4xl font-bold">Iniciar sesión</h3>
            <p className="text-sm text-gray-500">Ingresa tus credenciales para continuar</p>
            <form onSubmit={handleLogin}>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                    <Button variant="purple" type="submit" disabled={loading}>Iniciar sesión</Button>
                    <Link href="/forgot-password" className="text-sm text-gray-500">¿Olvidaste tu contraseña?</Link>
                    <hr className="w-full border-gray-300 rounded-full" />
                    {loading && <p className="text-sm text-gray-500">Cargando...</p>}
                    <Link href="/register" className="text-sm text-gray-500">
                        <Button variant="dark">Crear cuenta</Button>
                    </Link>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                </div>
            </form>
        </div>
    );
}