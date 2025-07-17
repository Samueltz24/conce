import img from "../img/chefo.avif"
import img1 from "../img/whatsapp.png"
import img2 from "../img/seta.png"
import Imagem from "./Imagem"
import '../App.css'
function Nav(){
    return(
        <>
            <div className="principal">
                <div className="filhos marca">
                    <img className="logo" src={img} alt="" />
                </div>
                <div className="filhos fale">
                     <p><img src={img1} alt="" /> whattsap </p>
                </div>
                <div className="filhos1">
                        <div className="links">
                            <p>Compra <Imagem img={img2}/></p>
                        </div>
                        <div className="links">
                            <p>Veiculos <Imagem img={img2}/></p>
                        </div>
                        <div className="links">
                            <p>Vendas diretas <Imagem img={img2}/></p>    
                        </div>
                        
                </div>
            </div>
        </>
    )
}

export default Nav