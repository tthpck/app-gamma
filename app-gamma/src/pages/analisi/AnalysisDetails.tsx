import { useParams } from "react-router-dom";
import { returnAnalysis } from "../../data/analyses";
import styles from "./AnalysisDetails.module.css";

const AnalysisDetails = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <>ANALISI NON TROVATA</>;

  const analysis = returnAnalysis(id);

  if (!analysis) return <div>QUESTA ANALISI NON ESISTE</div>;
  else
    return (
      <div className={styles.analysisDetailsPage}>
        <h1>{analysis.title}</h1>
        <strong className={styles.analysisDate}>{analysis.date}</strong>
        <span>{analysis.text}</span>
      </div>
    );
};

export default AnalysisDetails;
