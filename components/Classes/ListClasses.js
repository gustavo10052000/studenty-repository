import React, { Component } from 'react';

class ClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: this.props.classes,
            grades: [1, 2, 3, 4, 5, 6]
        };
    }

    render() {
        // return(
        //     <div className="list-classes">
        //         {this.state.classes.map(classItem =>
        //             <div className="card-class zoom-hover"
        //             key={classItem.id}
        //             style={{ borderColor: classItem.color }}
        //             onClick={() => this.props.getClass(classItem)}
        //             >
        //                 <h3>{classItem.name}</h3>
        //                 <p>{classItem.teacher}</p>
        //             </div>
        //         )}
        //     </div>
        // )
        return(
            <div className="list-classes">
                {this.state.grades.map(grade =>
                    <div className="list-grade">
                        <input type="checkbox" name="cheked-grade" hidden id={`parent${grade}`}/>
                        <label className="number-grade" for={`parent${grade}`}>
                            {grade}° Termo
                        </label>
                        {/* <div className="grade" style={{ display: "none" }}> */}
                        <div className="grade" >
                            {this.state.classes.map(classItem =>
                                {if(grade === classItem.grade) {
                                    return(
                                        <div className="card-class zoom-hover"
                                        key={classItem.id}
                                        style={{ borderColor: classItem.color }}
                                        onClick={() => this.props.getClass(classItem)}
                                        >
                                            <h3>{classItem.name}</h3>
                                            <p>{classItem.teacher}</p>
                                        </div>
                                    )
                                }}
                                )}
                            </div>
                    </div>
                )}
            </div>
        )
    }
}

export default ClassList;
