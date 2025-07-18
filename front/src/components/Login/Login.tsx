import './Login.scss';

function Login() {
  return (
    <section>
      <div className='login'>
        <h1>Iniciar sesión</h1>

        <form action="">
          <div className='input_container'>
            <input type="input" className="form_field" placeholder="Email" />
            <label htmlFor="email" className="form_label">Email</label>
          </div>

          <div className='input_container'>
            <input type="input" className="form_field" placeholder="Password" />
            <label htmlFor="password" className="form_label">Password</label>
          </div>

          <div className="remember_me">
            <input type="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Remember me</label>
          </div>

          <div className="forgot_password">
            <a href="#">Forgot password?</a>
          </div>

          <button>
            Sign in
            <div className="arrow_wrapper">
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
  )
}

export default Login