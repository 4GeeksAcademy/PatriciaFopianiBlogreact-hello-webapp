import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Demo } from "./pages/Demo";
import { Locations } from "./pages/Locations";
import { Single } from "./pages/Single";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} />
      <Route path="demo" element={<Demo />} />
      <Route path="locations" element={<Locations />} />
      <Route path="/single/:type/:id" element={<Single />} />
    </Route>
  )
);
