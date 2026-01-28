import styles from "./Analysis.module.css";
import type { Analysis } from "../../types/analysisTypes";
import { NavLink } from "react-router-dom";

type Props = {
  analysis: Analysis;
};
const AnalysisCard = ({ analysis }: Props) => {
  function cutText(text: string) {
    const maxLength = 150;
    return `${text.slice(0, maxLength)}${"..."}`;
  }
  return (
    <NavLink className={styles.analysisCard} to={`/analisi/${analysis.id}`}>
      <h1 className={styles.titleCard}>{analysis.title}</h1>
      <strong className={styles.dateCard}>{analysis.date}</strong>
      <span>{cutText(analysis.text)}</span>
    </NavLink>
  );
};

export default AnalysisCard;
