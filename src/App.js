import { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import contacts from './components/Json/contacts-data.json';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  render() {
    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
