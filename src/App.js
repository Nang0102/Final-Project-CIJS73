import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./page/ProductPage/Product";
import ProductDetail from "./page/ProductDetailPage/ProductDetail";
import ProductLayout from "./page/ProductPage/ProductLayout";
import Layout from "./Components/Layout/Layout";
import NoPage from "./Components/NoPage/NoPage";
import Blog from "./Blog/Blog";
import BlogLayout from "./Blog/BlogLayout";
import Gio from "./Blog/Gio";
import RauMa from "./Blog/RauMa";
import TrangMieng from "./Blog/TrangMieng";
import BanhNgot from "./Blog/BanhNgot";
import IntroductionLayout from "./Introduction/IntroductionLayout";
import Introduction from "./Introduction/Introduction";
import Restore from "./Introduction/Restore";
import Privacy from "./Introduction/Privacy";
import Service from "./Introduction/Service";
import Searching from "./Introduction/Searching";
import Contact from "./Introduction/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/san-pham" element={<ProductLayout />}>
            <Route index element={<Product />} />
            <Route path="/san-pham/:productId" element={<ProductDetail />} />
          </Route>
          <Route path="/gioi-thieu" element={<IntroductionLayout />}>
            <Route index element={<Introduction />} />
            <Route path="restore" element={<Restore />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="service" element={<Service />} />
            <Route path="searching" element={<Searching />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/tin-tuc" element={<BlogLayout />}>
            <Route index element={<Blog />} />
            <Route path="gio" element={<Gio />} />
            <Route path="rau-ma" element={<RauMa />} />
            <Route path="trang-mieng" element={<TrangMieng />} />
            <Route path="banh-ngot" element={<BanhNgot />} />
          </Route>
          <Route path="/khuyen-mai" element={<LandingPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
