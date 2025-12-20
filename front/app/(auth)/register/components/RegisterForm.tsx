"use client";

import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function RegisterForm() {
    return (
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-md">
                    {/* Formulario con efecto blur */}
                    <div className="backdrop-blur-xl bg-white/20 rounded-3xl shadow-2xl border border-white/20 p-8">
                        <div className="text-center mb-8">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                Crear cuenta
                            </h3>
                            <p className="text-sm text-white">
                                Ingresa tus datos para crear una cuenta
                            </p>
                        </div>

                        <form>
                            <div className="flex flex-col gap-4">
                                <Input 
                                    type="text" 
                                    placeholder="Nombre" 
                                />
                                
                                <Input 
                                    type="text" 
                                    placeholder="Apellido" 
                                />
                                
                                <Input 
                                    type="email" 
                                    placeholder="Email" 
                                />
                                
                                <Input 
                                    type="password" 
                                    placeholder="Contraseña" 
                                />
                                
                                <Input 
                                    type="password" 
                                    placeholder="Confirmar contraseña" 
                                />
                                
                                <Button 
                                    variant="purple" 
                                    className="w-full mt-2"
                                >
                                    Crear cuenta
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
                            </div>
                        </form>
                    </div>
                    
                    {/* Decoración adicional */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Al crear una cuenta, aceptas nuestros términos y condiciones
                    </p>
                </div>
            </div>
    );
}