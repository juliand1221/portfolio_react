import {Routes, Route} from "react-router-dom"
import Principal from "pages/Home";
// import About from "pages/Abput";
// import Contact from "pages/Contact";
import Layoutprincipal from "layout/Principal";


function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layoutprincipal/>}>
          <Route path="/" element={<Principal/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
