// import Header from "Components/Header"
import Footer from "Components/Footer"
import { Outlet } from "react-router-dom"
import HeaderTwo from "Components/HeaderTwo"
import "styles/layout.css"


const Layoutprincipal = () => {
    return(
        <div>
            <HeaderTwo />
            {/* <Header /> */}
            <main className="contenido">
                <Outlet />
            </main>
            <Footer /> 

           
            
        </div>
    )
}

export default Layoutprincipal;