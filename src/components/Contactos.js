import React, { Component } from "react";
import axios from "axios";
import Contacto from "./Contacto";
import AddContact from "./AddContact";
import "./styles/Contactos.css";

class Contactos extends Component {
  state = {
    contacts: []
  };

  getContacts = async () => {
    const res = await axios.get("http://localhost:3000/api/contactos");
    this.setState({
      contacts: res.data
    });
    console.log(this.state.contacts);
  };

  componentDidMount() {
    console.log("Componente contactos montado");
    this.getContacts();
  }
  render() {
    return (
      <div className="container">
        <AddContact getContacts={this.getContacts} />
        <h2 className="title">Tus contactos:</h2>
        <div className="contactos-list">
          {this.state.contacts.map(cont => (
            <Contacto contact={cont} key={cont._id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contactos;
