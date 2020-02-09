import React, { Component } from 'react';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes
        };
    }

    render() {
        return(
            <div className="list-notes">
                {this.state.notes.map(note =>
                    <div className="card-note" key={note.id}>
                        <h4>{note.name}</h4>
                        <div className="card-content">{note.data}</div>
                    </div>
                )}
            </div>
        )
    }
}

export default NotesList;
