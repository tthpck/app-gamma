import Icons from "../../components/Icons";
import telegramIcon from "../../images/contactus/telegram.svg?react";
import whatsappIcon from "../../images/contactus/whatsapp.svg?react";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      Contattaci su
      <NavLink to={`https://t.me/manuel_gamma`}>
        <Icons Icon={telegramIcon} size={20} />
      </NavLink>
      <NavLink to={`https://web.whatsapp.com/send?phone=393337926257`}>
        <Icons Icon={whatsappIcon} size={25} />
      </NavLink>
    </div>
  );
};

export default ContactUs;
