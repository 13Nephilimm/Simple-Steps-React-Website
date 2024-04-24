import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";
import Career from "./pages/career/Career";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Branding from "./pages/branding/Branding";
import BrandAudit from "./pages/brandaudit/BrandAudit";
import Management from "./pages/management/Management";
import Marketing from "./pages/marketing/Marketing";
import Content from "./pages/content/Content";
import Production from "./pages/production/Production";
import WebDevelopment from "./pages/webdevelopment/WebDevelopment";
import AcademyHome from "./academy/academy-pages/academy-home/AcademyHome";
import AcademyAbout from "./academy/academy-pages/academy-about/AcademyAbout";
import AcademyCourses from "./academy/academy-pages/academy-courses/AcademyCourses";
import AcademyContact from "./academy/academy-pages/academy-contact/AcademyContact";
import NikaSandro from "./academy/academy-pages/nika-sandro/NikaSandro";
import GoogleAds from "./academy/academy-pages/google-ads/GoogleAds";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/academy" element={<AcademyHome />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/brand-audit" element={<BrandAudit />} />
        <Route path="/management" element={<Management />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/content" element={<Content />} />
        <Route path="/production" element={<Production />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/academy-courses" element={<AcademyCourses />} />
        <Route path="/academy-about" element={<AcademyAbout />} />
        <Route path="/academy-contact" element={<AcademyContact />} />
        <Route path="/digital-marketing" element={<NikaSandro />} />
        <Route path="/google-ads" element={<GoogleAds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
