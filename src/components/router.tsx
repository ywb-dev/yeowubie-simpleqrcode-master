import { Route, Routes  } from "react-router-dom";
import QrCreate from "../pages/QrCreatePage"
import UrlCreate from "../pages/UrlCreatePage"
import Home from "../pages/Home";
import DonatePage from "../pages/Donate";
const Router = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/short-qr" element={<QrCreate />} />
        <Route path="/short-url" element={<UrlCreate />} />
        <Route path="/donate" element={<DonatePage />} />

      </Routes>
    
  );
};

export default Router;
