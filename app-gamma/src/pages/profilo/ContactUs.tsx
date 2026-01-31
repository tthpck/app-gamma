import Icons from "../../components/Icons";
import telegramIcon from "../../images/contactus/telegram.svg?react";
import whatsappIcon from "../../images/contactus/whatsapp.svg?react";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";
import contactUsIcon from '../../images/profilePage/contactUs.svg?react'



const ContactUs = () => {
  return (
    <div className={styles.profileCard}>
      <Icons Icon={contactUsIcon} size={30}/>
      <p className={styles.profileText}>Contattaci su</p>
      <div className={styles.contactUsIcons}>
      <NavLink className={styles.telegramIcon} to={`https://t.me/manuel_gamma`}>
        <Icons Icon={telegramIcon} size={35} />
      </NavLink>
      <NavLink className={styles.whatsappIcon}to={`https://web.whatsapp.com/send?phone=393337926257`}>
        <Icons Icon={whatsappIcon} size={40} />
      </NavLink>
      </div>
    </div>
  );
};

export default ContactUs;
