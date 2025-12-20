"use client";

import Link from "next/link";
import { useState } from "react";
/* import Logo from "../../../../app/logo.png"
import Image from "next/image"; */

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
            setError("Error al iniciar sesión");
        } else {
            router.push("/");
        }
        setLoading(false);

        await supabase.auth.signOut();
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md">
                <div className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/20 p-8">
                    <div className="text-center mb-8 flex flex-col items-center">
                        {/* <Image src={Logo} alt="Logo" width={80} /> */}
                        <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                            Bienvenido de nuevo
                        </h3>
                        <p className="text-sm text-white">Ingresa tus credenciales para continuar</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-5">
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            
                            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                            
                            <Button variant="purple" type="submit" disabled={loading} className="w-full">
                                {loading ? 'Cargando...' : 'Iniciar sesión'}
                            </Button>
                            
                            <Link href="/forgot-password" className="text-md text-purple-600 hover:text-purple-700 text-center font-medium transition-colors">
                                ¿Olvidaste tu contraseña?
                            </Link>
                            
                            <div className="flex items-center gap-4 my-4">
                                <div className="flex-1 border-t border-gray-300"></div>
                                <span className="text-white text-md">o</span>
                                <div className="flex-1 border-t border-gray-300"></div>
                            </div>
                            
                            <Link href="/register" className="w-full">
                                <Button variant="dark" className="w-full">
                                    Crear cuenta
                                </Button>
                            </Link>
                            
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                                    <p className="text-sm text-red-600 font-medium">{error}</p>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
                
                {/* Decoración adicional */}
                <p className="text-center text-sm text-gray-500 mt-6">Al continuar, aceptas nuestros términos y condiciones.</p>
            </div>
        </div>
    );
}