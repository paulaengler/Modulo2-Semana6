import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Contato from './components/Contato'

function App() {
  
  const [contato, setContato] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  useEffect(() => {
    console.log('useEffect rodando')
  }, [contato])

  return (
    <>
      <Header></Header>

      <h1> Teste </h1>

      <h4> Formulário de contato </h4>
      
      <Contato></Contato>

      <h1> Teste </h1>

      <Footer></Footer>

    </>
  )
}

export default App




{/* Criado automaticamente ao gerar projeto Reat e Vite
function App() {
  const [count, setCount] = useState(0)
   return (
    <>
  <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
          </>
  )
}

export default App*/}