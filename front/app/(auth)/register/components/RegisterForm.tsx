"use client";

import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function RegisterForm() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background-light rounded-lg p-8 gap-4">
            <h3 className="text-4xl font-bold">Crear cuenta</h3>
            <p className="text-sm text-gray-500">Ingresa tus datos para crear una cuenta</p>
            <form>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Input type="text" placeholder="Nombre" />
                    <Input type="text" placeholder="Apellido" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Contraseña" />
                    <Input type="password" placeholder="Confirmar contraseña" />
                    <Button variant="purple">Crear cuenta</Button>
                    <hr className="w-full border-gray-300 rounded-full" />
                    <Link href="/login" className="text-sm text-gray-500">
                        <Button variant="dark">Iniciar sesión</Button>
                    </Link>
                </div>
            </form>
        </div>
    );
}