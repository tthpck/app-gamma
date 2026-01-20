import { analyses } from "../../data/analyses"
import AnalysisCard from "./AnalysisCard"

const Analisi = () => {
  return (
    <>
    {analyses.map((analysis)=> 
<AnalysisCard key={analysis.id }analysis={analysis}/>

    
    )}
      </>
   
  )
}

export default Analisi