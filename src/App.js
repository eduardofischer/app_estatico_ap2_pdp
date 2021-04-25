import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [nomes, setNomes] = useState([])
  const [cartoes, setCartoes] = useState([])

  useEffect(() => {
    console.debug('effect')
    axios.get('http://3.216.15.43:8000/api/grupo')
      .then(res => {
        console.debug(res)
        if (res?.data?.nomes)
          setNomes(res.data.nomes)
        if (res?.data?.cartoes)
          setCartoes(res.data.cartoes)
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App AP2 PDP
        </p>
        <p>Os dados abaixo foram consultados de uma API rodando em NodeJs hospedada em uma máquina virtual rodando na AWS.</p>
        
        <h4>Componentes do Grupo</h4>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex', flexDirection: 'column', marginRight: '10px'}}>
            {nomes.map(nome => <div key={nome}>{nome}</div>)}
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {cartoes.map(cartao => <div key={cartao}>{cartao}</div>)}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
