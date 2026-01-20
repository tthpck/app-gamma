import Layout from './components/Layout'
import Home from './pages/home/Home.tsx'
import Portafogli from './pages/portafogli/Portafogli'
import Profilo from './pages/Profilo'
import Analisi from './pages/analisi/Analisi.tsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import PortfolioDetails from './pages/portafogli/PortfolioDetails.tsx'
import AnalysisDetails from './pages/analisi/AnalysisDetails.tsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path = "/portafogli" element={<Portafogli />} />
            <Route path = "/analisi" element={<Analisi />} />
            <Route path = "/profilo" element={<Profilo />} />
            <Route path = {`/dettagli/:id`} element={<PortfolioDetails/>}/>
            <Route path ={'analisi/:id'} element={<AnalysisDetails/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>

  )
}

export default App