import { lazy } from "react";

export const Home = lazy(() => import("./home/home"));
export const AboutUs = lazy(() => import("./about-us/about-us"));
export const Catalog = lazy(() => import("./catalog/catalog"));
export const Delivery = lazy(() => import("./delivery/delivery"));
export const Contacts = lazy(() => import("./contacts/contacts"));
export const Reviews = lazy(() => import("./reviews/reviews"));
export const NotFound = lazy(() => import("./not-found/not-found"));
