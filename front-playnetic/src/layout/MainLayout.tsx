import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import { Topbar } from "./Topbar";

export const MainLayout = () => {
    return (
        <BrowserRouter>
            <Sidebar />
            <Topbar />
        </BrowserRouter>
    )
};
