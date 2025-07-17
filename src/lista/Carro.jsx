import { useState } from 'react'
import '../App.css'
import carro1 from "../assets/carros/carrosiza.avif"
import carro2 from "../assets/carros/carropreto.avif"
import carro3 from "../assets/carros/carroverde.avif"
import carro4 from "../assets/carros/carroazul.avif"
import carro5 from "../assets/carros/carrovermelho.avif"

function Carro() {
  const [imagemAtual, setImagemAtual] = useState(carro1)

  return (
    <>
      <div className="ima">
        <div>
          <img id="carro" className="cor" src={imagemAtual} alt="carro" />
        </div>
        <div className="bola siza" onClick={() => setImagemAtual(carro1)}></div>
        <div className="bola preto" onClick={() => setImagemAtual(carro2)}></div>
        <div className="bola verde" onClick={() => setImagemAtual(carro3)}></div>
        <div className="bola azul" onClick={() => setImagemAtual(carro4)}></div>
        <div className="bola vermelho" onClick={() => setImagemAtual(carro5)}></div>
      </div>
    </>
  )
}

export default Carro
