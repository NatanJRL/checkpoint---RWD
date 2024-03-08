import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header Title='Checkpoint IV'/>
      
      <div className='card-container'>
      <Card Nome='Tobey Maguire'
       Idade={48}
      Imagem='https://g1.globo.com/Noticias/Cinema/foto/0,,15444595-EX,00.jpg'
      Descricao='Homem Aranha (2002)' />

      <Card Nome='Andrew Garfield'
       Idade={40}
      Imagem='https://f.i.uol.com.br/folha/folhateen/images/11014430.jpeg'
      Descricao='O Espetacular Homem Aranha (2012)' />

      <Card Nome='Tom Holland'
       Idade={27}
      Imagem='https://conteudo.imguol.com.br/c/entretenimento/cc/2019/09/08/tom-holland-1567962787683_v2_3x4.jpg'
      Descricao='Homem Aranha: De Volta ao lar (2016)' />
      </div>
      
    </>
  )
}

export default App
