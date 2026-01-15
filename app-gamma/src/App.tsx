import Layout from './components/Layout'
import Home from './pages/Home'
import Portafogli from './pages/portafogli/Portafogli'
import Profilo from './pages/Profilo'
import Analisi from './pages/Analisi.tsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import PortfolioDetails from './pages/portafogli/PortfolioDetails.tsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path = "/portafogli" element={<Portafogli />} />
            <Route path = "/articoli" element={<Analisi />} />
            <Route path = "/profilo" element={<Profilo />} />
            <Route path = {`/dettagli/:id`} element={<PortfolioDetails/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>

  )
}

export default App