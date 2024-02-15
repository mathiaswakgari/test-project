import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SongForm from "./components/SongForm";
import SongsPage from "./pages/SongsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { index: true, element: <SongsPage /> },
      { path: "songs/add", element: <SongForm /> },
    ],
  },
]);

export default router;
