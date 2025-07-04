import "./App.css";
import { MainLayout } from "./layout/MainLayout";

function App() {
  const LOGGED = true

  return (
    <div>
      {LOGGED && <MainLayout />}
    </div>
  );
}

export default App;
