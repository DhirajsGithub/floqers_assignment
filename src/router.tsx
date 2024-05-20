import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import DetailView from "./pages/DetailView";

const router = createBrowserRouter([
    {
        path: "/", element: <App />, children: [
            { path: "/", element: <Home /> },
            { path: "/detailView/:year", element: <DetailView /> }
        ]
    }
])

export default router