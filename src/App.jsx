import { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResponsiveProvider } from "./hooks/useResponsive";
import { MainLayout } from "./layouts";
import { Loader, ScrollToTop } from "./components/ui";
import {
  HomePage,
  AboutUsPage,
  CatalogPage,
  CartPage,
  DeliveryPage,
  ContactsPage,
  ReviewsPage,
  NotFoundPage,
  ChatBotPage,
} from "./pages";
import { CartProvider } from "./contexts/CartContext.jsx";
// import { LoadingScreen } from "./components/LoadingScreen"; // Подключаем компонент
import ProductDetails from "./components/catalog/ProductDetails.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setIsLoading(false);
    };

    loadAssets();
  }, []);

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  return (
    <CartProvider>
      <ResponsiveProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about-us" element={<AboutUsPage />} />
                <Route path="catalog" element={<CatalogPage />} />
                <Route path="/catalog/:id" element={<ProductDetails />} />
                <Route path="delivery" element={<DeliveryPage />} />
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
                <Route path="cart" element={<CartPage />} />

                <Route path="*" element={<NotFoundPage />} />
              </Route>
              <Route path="/chatbot" element={<ChatBotPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ResponsiveProvider>
    </CartProvider>
  );
};

export default App;
