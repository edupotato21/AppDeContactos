import React, { Component } from "react";
import axios from "axios";
import "./styles/AddContact.css";

class AddContact extends Component {
  state = {
    name: "",
    number: null
  };

  onChange = e => {
    console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number
    };
    console.log(newContact);
    const res = await axios.post(
      "http://localhost:3000/api/contactos",
      newContact
    );
    console.log(res.message);
    this.props.getContacts();
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        <label for="name" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          className="form-item"
          id="name"
          onChange={this.onChange}
          required
          autocomplete="off"
        />
        <label for="number" className="form-label">
          Número:
        </label>
        <input
          type="number"
          className="form-item"
          id="number"
          onChange={this.onChange}
          required
          autocomplete="off"
        />
        <button type="submit" className="btn-submit">
          Agregar
        </button>
      </form>
    );
  }
}

export default AddContact;
