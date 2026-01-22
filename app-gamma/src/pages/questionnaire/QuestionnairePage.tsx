import {NavLink} from 'react-router-dom'

const QuestionnairePage = () => {
  return (
    <div>
        <div>Rispondi a 3 brevi domande per capire quale dei portafogli Gamma fa al caso tuo.</div>
        <NavLink to={'/questionario/1'}>Cominciamo!</NavLink>
    </div>
  )
}

export default QuestionnairePage