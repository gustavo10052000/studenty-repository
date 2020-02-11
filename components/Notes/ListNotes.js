import React, { Component } from 'react';
import IconNewNote from '../Layout/IconNewNote';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes,
        };
    }

    render() {
        if(this.props.classItem) {
            return(
                <div className="list-notes">
                    <div className="name-class" style={{ backgroundColor: this.props.classItem.color }}>
                        <h2>{this.props.classItem.name}</h2>
                        <div className="search-notes">
                            <i className="fas fa-search"/>
                            <input className="search-notes-input" placeholder="Procurar..." style={{ border: 0, marginLeft: 5 }}/>
                        </div>
                    </div>
                    <div className="note" style={{ backgroundColor: `${this.props.classItem.color}66` }}>
                        {this.state.notes.map(note =>
                            <div className="card-note" key={note.id} style={{ backgroundColor: this.props.classItem.color }}>
                                <h4>{note.name}</h4>
                                <div className="card-content">{note.data}</div>
                            </div>
                        )}
                    </div>
                    <IconNewNote />
                </div>
            )
        }

        return(
            <div className="without-notes">
                <i className="fas fa-book" />
                <h1>Selecione uma matéria</h1>
            </div>
        )
    }
}

export default NotesList;
