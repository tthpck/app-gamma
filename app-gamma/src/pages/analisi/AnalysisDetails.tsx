import { useParams } from "react-router-dom"
import { returnAnalysis } from "../../data/analyses"

const AnalysisDetails = () => { 
    const {id} = useParams<{id:string}>()

    if (!id) return <>ANALISI NON TROVATA</>;

    const analysis = returnAnalysis(id)

    if (!analysis) return <div>QUESTA ANALISI NON ESISTE</div>;
    else return (
    <div>
      <div>{analysis.title}</div>
      <div>{analysis.date}</div>
      <div>{analysis.text}</div>
    </div>
  )
}

export default AnalysisDetails