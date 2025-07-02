import GridMotion from '../../components/GridMotion/GridMotion';
import { items } from './gridItems';
import "./LoginScreen.scss";

function LoginScreen() {

  return (
    <section className='loginScreen'>
      <div className='login'>
        <h1>Login</h1>

        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>

        <button>
          Sign up
          <div className="arrow-wrapper">
              <div className="arrow"></div>

          </div>
        </button>
      </div>

      <GridMotion items={items} />
    </section>
  )
}

export default LoginScreen