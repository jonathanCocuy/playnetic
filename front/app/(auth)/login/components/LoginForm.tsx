import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginForm() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background-light rounded-lg p-8 gap-4">
            <h3 className="text-2xl font-bold">Iniciar sesión</h3>
            <p className="text-sm text-gray-500">Ingresa tus credenciales para continuar</p>
            <div className="flex flex-col items-center justify-center gap-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Contraseña" />
                <Button variant="dark">Iniciar sesión</Button>
            </div>
        </div>
    );
}