"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase/client";

export default function RegisterForm() {
    const router = useRouter();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    );


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(
            {   
                ...form, 
                [e.target.name]: e.target.value 
            }
        );
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (form.password !== form.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        setLoading(true);

        // 1️⃣ Create user in Supabase Auth
        const { data, error } = await supabase.auth.signUp(
            {
                email: form.email,
                password: form.password,
            },
        );

        if (error || !data.user) {
            setError("Error al crear usuario");
            setLoading(false);
            return;
        }

        // 2️⃣ Create profile with other data in form register
        const { error: profileError } = await supabase.from("profiles").insert(
            {
                id: data.user.id,
                first_name: form.firstName,
                last_name: form.lastName,
                email: form.email,
            }
        );

        if (profileError) {
            setError("Error al crear perfil");
            setLoading(false);
            return;
        }

        router.push("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 w-full">
            <div className="w-full max-w-md">
                <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 p-8">
                    <div className="text-center mb-8 flex flex-col items-center">
                        <h3 className="text-4xl font-bold text-purple-400 mb-2"
                            style={{ 
                                textShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7, 0 0 40px #a855f7',
                                letterSpacing: '0.05em'
                            }}>
                            Crear cuenta
                        </h3>
                        <p className="text-sm text-white">Completa tus datos para registrarte</p>
                    </div>

                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col gap-5">
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
                            
                            <Button variant="purple" type="submit" disabled={loading} className="w-full">
                                {loading ? 'Creando cuenta...' : 'Registrarse'}
                            </Button>
                            
                            <div className="flex items-center gap-4 my-4">
                                <div className="flex-1 border-t border-gray-300"></div>
                                <span className="text-white text-md">o</span>
                                <div className="flex-1 border-t border-gray-300"></div>
                            </div>
                            
                            <Link href="/login" className="w-full">
                                <Button variant="dark" className="w-full">
                                    Iniciar sesión
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
