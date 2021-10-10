// import contacts from '../Json/contacts-data.json';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul className="contact-list">
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={s.contact__item}>
            <p className={s.item}>{name}:</p>
            <p className={s.item}>{number}</p>
            <button type="button" className={s.onClick__btn} onClick={() => {}}>
              Deleted
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  name: PropTypes.string,
  tel: PropTypes.string,
  id: PropTypes.node,
};

export default ContactList;
