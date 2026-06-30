import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Announcements from "../pages/Announcements/Announcements";
import Programs from "../pages/Programs/Programs";
import Events from "../pages/Events/Events";
import Startups from "../pages/Startups/Startups";
import Gallery from "../pages/Gallery/Gallery";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";
import Apply from "../pages/Apply/Apply";

export const router = createBrowserRouter([
{
path: "/",
element: <MainLayout />,
children: [
{ index: true, element: <Home /> },


  { path: "about", element: <About /> },

  { path: "announcements", element: <Announcements /> },

  { path: "programs", element: <Programs /> },

  { path: "startups", element: <Startups /> },

  { path: "events", element: <Events /> },

  { path: "gallery", element: <Gallery /> },

  { path: "team", element: <Team /> },

  { path: "contact", element: <Contact /> },

  { path: "apply", element: <Apply /> },
],


},
]);
