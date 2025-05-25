import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home"
import AnimeChars from "../pages/AnimeChars";
import SeriesChars from "../pages/SeriesChars";
import GameChars from "../pages/GameChars";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {path: "", Component: Home},
      {path: "/animechars", Component: AnimeChars},
      {path: "/serieschars", Component: SeriesChars},
      {path: "/gamechars", Component: GameChars},
    ]
  }
])

export default router;