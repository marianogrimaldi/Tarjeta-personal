import "./Home.scss"
import zermatt from "../../assets/zermatt1.jpg"
import logoMajo from "../../assets/logoMajo.png"
import Traductor from "../TraductorSelect/Traductor"
import { useTranslation } from "react-i18next"

const Home = () => {

    const { t } = useTranslation();

    return (
       
        <div>
             <Traductor/>
<img src={zermatt} className="imgZermatt" alt="" />
            <div className="datos">
                 <h1>MARIANO GRIMALDI</h1>
            <h2>{t("Home.tecnico")} </h2>
            <h3>{t("Home.agencia")}</h3>
            <a href="http://www.majopurinan.tur.ar/" target="_blank"><p>www.majopurinan.tur.ar</p></a>
            <div className="flexNumber">
                <a href="https://api.whatsapp.com/send?phone=5493406421065" target="_blank"><p>3406 421065</p></a>
                <a href="https://api.whatsapp.com/send?phone=5493406421065" target="_blank"><p>341 2025536</p></a>
                <a href="https://www.instagram.com/majopurinanviajes/" target="_blank"><p>@majopurinanviajes</p></a>

            </div>
            <img src={logoMajo} className="logoMajo" alt="" />
            <a href="http://www.majopurinan.tur.ar/quienes_somos" target="_blank"><p className="frase">{t("Home.frase")}</p></a>

            </div>
            <div>
                
            </div>

        </div>
    )
}

export default Home