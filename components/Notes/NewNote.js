import React, { Component } from 'react';

class NewNote extends Component {
    render() {
        return(
            <form className="form-note">
                <div>Nome: </div>
                <input />
                <div>Anotação: </div>
                <textarea className="input-note"/>
                <button>Enviar Anotação</button>
            </form>
        )
    }
}

export default NewNote;
