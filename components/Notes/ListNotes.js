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
                    <div className="name-class" style={{ backgroundColor: this.props.classItem.color }}>{this.props.classItem.name}</div>
                    <div className="note">
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

        return(<div></div>)
    }
}

export default NotesList;
