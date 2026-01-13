import Layout from './components/Layout'
import Home from './pages/Home'
import Portafogli from './pages/Portafogli'
import Profilo from './pages/Profilo'
import Articoli from './pages/Articoli'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path = "/portafogli" element={<Portafogli />} />
            <Route path = "/articoli" element={<Articoli />} />
            <Route path = "/profilo" element={<Profilo />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>

  )
}

export default App