import { useState } from "react";

interface LoginScreenProps {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
}

function Login({ setIsLogged }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simular delay de autenticación
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === "admin" && password === "password*123") {
      setError("");
      setIsLogged(true);
    } else {
      setError("Credenciales incorrectas");
      setIsLogged(false);
    }
    setIsLoading(false);
  };

  return (
    <section className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[1000]">
      <div className="w-[420px] p-[50px_40px] rounded-3xl bg-white/10 text-white backdrop-blur-[50px] border border-white/20 shadow-[0_25px_50px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] relative overflow-hidden animate-slide-in-up before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent">
        <div className="text-center mb-10">
          <div className="mb-5">
            <div className="text-5xl inline-block animate-bounce-slow">🎮</div>
          </div>
          <h1 className="text-[32px] font-bold m-0 mb-2 bg-gradient-to-br from-white to-indigo-100 bg-clip-text text-transparent">
            Bienvenido
          </h1>
          <p className="text-base text-white/80 m-0">Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleLogin} className="w-full">
          <div className="relative mb-6">
            <div className="relative bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 overflow-hidden hover:border-white/30 hover:bg-white/8 focus-within:border-primary-purple/60 focus-within:bg-white/10 focus-within:shadow-[0_0_0_3px_rgba(139,69,255,0.1)]">
              <input
                type="text"
                id="email"
                className="w-full py-[35px] pr-[50px] pl-[60px] border-none outline-none bg-transparent text-white text-base font-medium placeholder-transparent peer"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email" className="absolute top-1/2 left-5 -translate-y-1/2 text-white/60 text-base font-medium pointer-events-none transition-all duration-300 flex items-center gap-2 peer-focus:top-3 peer-focus:left-5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary-purple/80 peer-focus:font-semibold peer-[&:not(:placeholder-shown)]:top-3 peer-[&:not(:placeholder-shown)]:left-5 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-primary-purple/80 peer-[&:not(:placeholder-shown)]:font-semibold">
                <span className="text-lg">👤</span>
                Username
              </label>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="relative bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 overflow-hidden hover:border-white/30 hover:bg-white/8 focus-within:border-primary-purple/60 focus-within:bg-white/10 focus-within:shadow-[0_0_0_3px_rgba(139,69,255,0.1)]">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full py-[35px] pr-[50px] pl-[60px] border-none outline-none bg-transparent text-white text-base font-medium placeholder-transparent peer"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password" className="absolute top-1/2 left-5 -translate-y-1/2 text-white/60 text-base font-medium pointer-events-none transition-all duration-300 flex items-center gap-2 peer-focus:top-3 peer-focus:left-5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary-purple/80 peer-focus:font-semibold peer-[&:not(:placeholder-shown)]:top-3 peer-[&:not(:placeholder-shown)]:left-5 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-primary-purple/80 peer-[&:not(:placeholder-shown)]:font-semibold">
                <span className="text-lg">🔒</span>
                Password
              </label>
              <button
                type="button"
                className="absolute right-[15px] top-1/2 -translate-y-1/2 bg-transparent border-none text-white/60 cursor-pointer text-lg p-[5px] rounded-lg transition-all duration-200 hover:text-white/90 hover:bg-white/10"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {error && (
              <span className="flex items-center gap-2 text-error text-sm mt-2 px-3 py-2 bg-error/10 rounded-lg border border-error/20 animate-shake">
                <span className="text-base">⚠️</span>
                {error}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center my-6">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember_me" className="w-[18px] h-[18px] accent-primary-purple rounded" />
              <label htmlFor="remember_me" className="text-white/80 text-sm cursor-pointer font-medium">Recordarme</label>
            </div>

            <div>
              <a href="#" className="text-primary-purple-light no-underline text-sm font-medium transition-all duration-200 hover:text-primary-purple hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <button type="submit" className="w-full py-[18px] px-6 border-none rounded-2xl bg-gradient-to-br from-primary-purple via-primary-purple-light to-primary-purple-dark text-white text-base font-semibold cursor-pointer relative overflow-hidden transition-all duration-300 mt-6 shadow-[0_8px_25px_rgba(139,69,255,0.3),0_4px_12px_rgba(124,58,237,0.2)] hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_12px_35px_rgba(139,69,255,0.4),0_6px_16px_rgba(124,58,237,0.3)] active:not-disabled:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-[left] before:duration-500 hover:not-disabled:before:left-full" disabled={isLoading}>
            <span className="flex items-center justify-center gap-2 relative z-[2]">
              {isLoading ? (
                <>
                  <span className="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin-slow"></span>
                  Iniciando sesión...
                </>
              ) : (
                <>
                  <span className="text-lg">🚀</span>
                  Iniciar sesión
                </>
              )}
            </span>
          </button>
        </form>

        <div className="text-center mt-8 pt-6 border-t border-white/10">
          <p className="m-0 mb-3 text-white/70 text-sm">¿No tienes una cuenta?</p>
          <a href="#" className="inline-flex items-center gap-2 text-primary-purple-light no-underline font-semibold text-sm px-4 py-2 rounded-xl bg-primary-purple-light/10 border border-primary-purple-light/20 transition-all duration-300 hover:text-primary-purple hover:bg-primary-purple-light/20 hover:border-primary-purple-light/30 hover:-translate-y-0.5">
            <span>Registrarse</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
