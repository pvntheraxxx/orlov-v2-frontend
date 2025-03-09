import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResponsiveProvider } from "./hooks/useResponsive";
import { MainLayout } from "./layouts";
import { Loader } from "./components/ui";
import {
  Home,
  AboutUs,
  Catalog,
  Delivery,
  Contacts,
  Reviews,
  NotFound,
} from "./pages";

const App = () => {
  return (
    <ResponsiveProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="delivery" element={<Delivery />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ResponsiveProvider>
  );
};

export default App;
