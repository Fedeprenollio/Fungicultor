import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NavBar } from "./pages/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";
import { Images } from "./components/images/Images";
import { Home } from "./pages/home/Home";
import { Galery } from "./pages/galery/Galery";
import { Recipes } from "./pages/recipes/Recipes";
import { Store } from "./pages/store/Store";
import { Contact } from "./pages/contact/Contact";
import { Learn } from "./pages/learn/Learn";
import { Footer } from "./pages/foot/Footer";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="learn" element={<Learn />} />
            <Route path="galery" element={<Galery />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="store" element={<Store />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
        <Footer />
        {/* <Route path="/" element={<Footer/>} /> */}
      </Router>
    
  );
}

export default App;