import React, { Component } from 'react';

class NewNote extends Component {
    render() {
        return(
            <form className="form-note">
                <div >Nome: </div>
                <input className="name-note"/>
                <div>Anotação: </div>
                <textarea className="content-note"/>
                <button>Enviar Anotação</button>
            </form>
        )
    }
}

export default NewNote;
