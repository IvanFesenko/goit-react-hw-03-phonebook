import React, { Component } from 'react';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const {
      value,
      dataset: { type },
    } = event.target;

    this.setState({
      [type]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor="formName">
          Name
          <input
            required
            id="formName"
            className={s.formName}
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            data-type="name"
            onChange={event => this.handleChange(event)}
          />
        </label>
        <label htmlFor="formNumber">
          Number
          <input
            id="formNumber"
            className={s.formNumber}
            type="tel"
            name="number"
            placeholder="Number"
            value={this.state.number}
            required
            data-type="number"
            onChange={event => this.handleChange(event)}
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
