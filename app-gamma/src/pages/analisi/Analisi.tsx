import { analyses } from "../../data/analyses";
import AnalysisCard from "./AnalysisCard";
import styles from "./Analysis.module.css";

const Analisi = () => {
  return (
    <div className={styles.analysisPage}>
      {[...analyses].reverse().map((analysis) => (
        <AnalysisCard key={analysis.id} analysis={analysis} />
      ))}
    </div>
  );
};

export default Analisi;
