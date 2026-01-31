import type { FAQtype } from "../../types/FAQtypes"
import { FAQList } from "../../data/FAQList"
import styles from './FAQ.module.css'

type FAQList = FAQtype;


const FAQ = () => {

  return (
    <section className={styles.FAQsection}>
        {FAQList.map(faq => 
            <details key={faq.id} className={styles.FAQdetails}>
                <summary className={styles.FAQinfo}>
                    {faq.question}
                </summary>
                <p className={styles.FAQinfo}>
                    <span>{faq.answer}</span>
                </p>
            </details>
        
        )}
 
    </section>
  )
}

export default FAQ