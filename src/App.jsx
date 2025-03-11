import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResponsiveProvider } from "./hooks/useResponsive";
import { MainLayout } from "./layouts";
import { Loader } from "./components/ui";
import {
  HomePage,
  AboutUsPage,
  CatalogPage,
  CartPage,
  DeliveryPage,
  ContactsPage,
  ReviewsPage,
  NotFoundPage,
} from "./pages";

const App = () => {
  return (
    <ResponsiveProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about-us" element={<AboutUsPage />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="delivery" element={<DeliveryPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ResponsiveProvider>
  );
};

export default App;
