import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

export const MainLayout = () => {
    return (
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    )
};
