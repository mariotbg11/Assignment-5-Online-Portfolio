import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import AwardCertification from "./pages/AwardCertification";
import Project from "./pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
    ],
  },
  {
    path: "/about",
    element: <MainLayout />,
    children: [
      {
        path: "/about",
        element: <AboutMe />,
      },
    ],
  },
  {
    path: "/experience",
    element: <MainLayout />,
    children: [
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
  },
  {
    path: "/skills",
    element: <MainLayout />,
    children: [
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
  {
    path: "/interest",
    element: <MainLayout />,
    children: [
      {
        path: "/interest",
        element: <Interest />,
      },
    ],
  },
  {
    path: "/award",
    element: <MainLayout />,
    children: [
      {
        path: "/award",
        element: <AwardCertification />,
      },
    ],
  },
  {
    path: "/project",
    element: <MainLayout />,
    children: [
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

export default router;
