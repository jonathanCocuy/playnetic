import GridMotion from "../../components/GridMotion/GridMotion";
import { items } from "./gridItems";
import Login from "../../components/Login/Login";
import "./loginScreen.scss";

interface LoginScreenProps {
    isLogged: boolean;
    setIsLogged: (value: boolean) => void;
}

function LoginScreen({ isLogged, setIsLogged }: LoginScreenProps) {
    return (
        <section className="login-screen">
            <Login isLogged={isLogged} setIsLogged={setIsLogged}/>

            <GridMotion items={items} />
        </section>
    );
}

export default LoginScreen;
