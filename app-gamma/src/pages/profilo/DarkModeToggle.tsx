import styles from './DarkModeToggle.module.css'


export const DarkModeToggle = () => {

    function handleClick(){
        document.documentElement.classList.toggle("dark")
    }
  return (
    <>
     Dark mode

      <label onChange={handleClick}className={styles.switch}>
  <input type="checkbox"/>
  <span className={styles.slider}></span>
</label>
</>
  )
}
