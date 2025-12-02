import GridMotion from "../../components/GridMotion/GridMotion";
import { items } from "./gridItems";
import Login from "../../components/Login/Login";

interface LoginScreenProps {
    isLogged: boolean;
    setIsLogged: (value: boolean) => void;
}

function LoginScreen({ isLogged, setIsLogged }: LoginScreenProps) {
    return (
        <section className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
            <Login isLogged={isLogged} setIsLogged={setIsLogged}/>

            <GridMotion items={items} />
        </section>
    );
}

export default LoginScreen;
