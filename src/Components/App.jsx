import {Routes, Route} from "react-router-dom"
import Principal from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";
import Layoutprincipal from "layout/Principal";
import "styles/App.css"


function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layoutprincipal/>}>
          <Route path="/" element={<Principal/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
