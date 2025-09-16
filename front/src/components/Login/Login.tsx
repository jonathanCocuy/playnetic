import { useState } from "react";
import "./Login.scss";

interface LoginScreenProps {
    isLogged: boolean;
    setIsLogged: (value: boolean) => void;
}

function Login ({ setIsLogged }: LoginScreenProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (email === "admin" && password === "admin") {
            setError("");
            setIsLogged(true);
        } else {
            setError("Credenciales incorrectas");
            setIsLogged(false);
        }
    }
    
    return (
        <section>
            <div className="login">
                <h1>Iniciar sesión</h1>

                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <input
                            type="text"
                            id="email"
                            className="form-field"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email" className="form-label">
                            Username
                        </label>
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            id="password"
                            className="form-field"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        {error && (
                            <span className="error-message">{error}</span>
                        )}
                    </div>

                    <div className="remember-me">
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">Remember me</label>
                    </div>

                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" className="login-button">
                        <span>
                            Sign in
                        </span>
                    </button>
                </form>

                <div className="register">
                    <p>Don't have an account?</p>
                    <a href="#">Register</a>
                </div>
            </div>
        </section>
    );
}

export default Login;
