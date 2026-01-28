import Layout from "./components/Layout";
import Home from "./pages/home/Home.tsx";
import Portafogli from "./pages/portafogli/Portafogli";
import Profilo from "./pages/profilo/Profilo.tsx";
import Analisi from "./pages/analisi/Analisi.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PortfolioDetails from "./pages/portafogli/PortfolioDetails.tsx";
import AnalysisDetails from "./pages/analisi/AnalysisDetails.tsx";
import QuestionnairePage from "./pages/questionnaire/QuestionnairePage.tsx";
import QuestionCard from "./pages/questionnaire/QuestionCard.tsx";
import ResultSuggestion from "./pages/questionnaire/ResultSuggestion.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafogli" element={<Portafogli />} />
            <Route path="/analisi" element={<Analisi />} />
            <Route path="/profilo" element={<Profilo />} />
            <Route path={`/dettagli/:id`} element={<PortfolioDetails />} />
            <Route path={"analisi/:id"} element={<AnalysisDetails />} />
            <Route path={"/questionario"} element={<QuestionnairePage />} />
            <Route path={"/questionario/:id"} element={<QuestionCard />} />
            <Route path="/risultati/" element={<ResultSuggestion />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
