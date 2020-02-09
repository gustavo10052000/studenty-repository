import React, { Component } from 'react';

class ClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: this.props.classes
        };
    }

    render() {
        return(
            <div className="list-classes">
                {this.state.classes.map(classItem =>
                    <div className="card-class zoom-hover" key={classItem.id} style={{ borderColor: classItem.color }}>
                        <h3>{classItem.name}</h3>
                        <p>{classItem.teacher}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default ClassList;
