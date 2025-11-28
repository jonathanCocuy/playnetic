import { useState } from "react";
import "./login.scss";

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
    <section className="login-section">
      <div className="login">
        <div className="login-header">
          <div className="logo">
            <div className="logo-icon">🎮</div>
          </div>
          <h1>Bienvenido</h1>
          <p>Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-container">
            <div className="input-wrapper">
              <input
                type="text"
                id="email"
                className="form-field"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email" className="form-label">
                <span className="label-icon">👤</span>
                Username
              </label>
            </div>
          </div>

          <div className="input-container">
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-field"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password" className="form-label">
                <span className="label-icon">🔒</span>
                Password
              </label>
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            {error && (
              <span className="error-message">
                <span className="error-icon">⚠️</span>
                {error}
              </span>
            )}
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember_me" />
              <label htmlFor="remember_me">Recordarme</label>
            </div>

            <div className="forgot-password">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            <span className="button-content">
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Iniciando sesión...
                </>
              ) : (
                <>
                  <span className="button-icon">🚀</span>
                  Iniciar sesión
                </>
              )}
            </span>
          </button>
        </form>

        <div className="register">
          <p>¿No tienes una cuenta?</p>
          <a href="#" className="register-link">
            <span>Registrarse</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
