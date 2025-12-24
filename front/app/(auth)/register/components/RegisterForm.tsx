"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase/client";

export default function RegisterForm() {
    const router = useRouter();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (form.password !== form.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        setLoading(true);

        // 1️⃣ Crear usuario en Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email: form.email,
            password: form.password,
        })

        if (error || !data.user) {
            setError(error?.message || "Error al crear usuario");
            setLoading(false);
            return;
        }

        // 2️⃣ Crear perfil
        const { error: profileError } = await supabase
        .from("profiles")
        .insert({
            id: data.user.id,
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
        });

        if (profileError) {
            console.error("PROFILE ERROR:", profileError);
            setError(profileError.message);
            setLoading(false);
            return;
        }

        router.push("/login");

        console.log(error);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background-light rounded-lg p-8 gap-4">
                <h3 className="text-4xl font-bold">Crear cuenta</h3>
                <p className="text-sm text-gray-500">
                    Completa tus datos para registrarte
                </p>

                <form onSubmit={handleRegister} className="w-full max-w-sm">
                    <div className="flex flex-col gap-4">
                    <Input
                        name="firstName"
                        placeholder="Nombre"
                        onChange={handleChange}
                        disabled={loading}
                        required
                    />

                    <Input
                        name="lastName"
                        placeholder="Apellido"
                        onChange={handleChange}
                        disabled={loading}
                        required
                    />

                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        disabled={loading}
                        required
                    />

                    <Input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        disabled={loading}
                        required
                    />

                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar contraseña"
                        onChange={handleChange}
                        disabled={loading}
                        required
                    />

                    <Button type="submit" variant="purple" disabled={loading}>
                        {loading ? "Creando cuenta..." : "Registrarse"}
                    </Button>

                    <Link href="/login" className="text-sm text-gray-500 text-center">
                        ¿Ya tienes cuenta? Inicia sesión
                    </Link>

                    {error && <p className="text-sm text-red-500">{error}</p>}
                    </div>
                </form>
        </div>
    );
}
