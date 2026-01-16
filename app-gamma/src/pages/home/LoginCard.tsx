import styles from './HomeCards.module.css'


type Props = {
    userName: string
}

const LoginCard = ({userName}: Props) => {
  return (<>
{!userName && <div className = {styles.homeCard}>Registrati o Accedi</div>}  
</>)
}

export default LoginCard