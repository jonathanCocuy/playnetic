import GridMotion from '../../components/GridMotion/GridMotion';
import { items } from './gridItems';
import Login from '../../components/Login/Login';
import "./LoginScreen.scss";

function LoginScreen() {

  return (
    <section className='loginScreen'>
      <Login />

      <GridMotion items={items} />
    </section>
  )
}

export default LoginScreen