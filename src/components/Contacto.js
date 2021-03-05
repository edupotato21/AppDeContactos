import React, { Component } from "react";
import axios from "axios";
import "./styles/Contacto.css";

class Contacto extends Component {
  onClickEdit = id => {
    console.log("Editar", id);
  };
  onClickDelete = id => {
    console.log("Eliminar", id);
  };

  render() {
    const { contact } = this.props;
    return (
      <div className="contact">
        <div className="contact-img">
          <img src="https://randomuser.me/api/portraits/women/11.jpg" />
        </div>
        <div className="contact-description">
          <h3>{contact.name}</h3>
          <p>{contact.number}</p>
          <div className="btn-container">
            <button
              className="btn btn-danger"
              onClick={() => this.onClickDelete(contact._id)}
            >
              Eliminar
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.onClickEdit(contact._id)}
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;
