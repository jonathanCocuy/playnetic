import "./Login.scss";

function Login() {
    return (
        <section>
            <div className="login">
                <h1>Iniciar sesión</h1>

                <form action="">
                    <div className="input-container">
                        <input
                            type="input"
                            className="form-field"
                            placeholder="Email"
                        />
                        <label htmlFor="email" className="form_label">
                            Email
                        </label>
                    </div>

                    <div className="input-container">
                        <input
                            type="input"
                            className="form-field"
                            placeholder="Password"
                        />
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                    </div>

                    <div className="remember-me">
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">Remember me</label>
                    </div>

                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>

                    <button>
                        Sign in
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
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
