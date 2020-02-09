import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Classes from '../components/Classes/ListClasses';
import Notes from '../components/Notes/ListNotes';

class index extends Component {
    render() {
        return(
            <div className="home-itens">
                <Classes classes={this.state.classesExample}/>
                <Notes notes={this.state.notesExample}/>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            classesExample: [
                {
                    id: 1,
                    name: "Programação Orientada a Objetos",
                    teacher: "Ricardo Favan",
                    color: "#FFB5E8"
                },
                {
                    id: 2,
                    name: "Matemática Discreta",
                    teacher: "Deise Deolindo",
                    color: "#B5B9FF"
                },
                {
                    id: 3,
                    name: "Algoritimos Avançados",
                    teacher: "Victor Borba",
                    color: "#FFFFD1"
                },
                {
                    id: 4,
                    name: "Geometria Analitica",
                    teacher: "Marçal Bissoli",
                    color: "#85E3FF"
                },
                {
                    id: 5,
                    name: "Sociedade, Tecnologia e Inovação",
                    teacher: "Tsen Chung",
                    color: "#F3FFE3"
                },
                {
                    id: 6,
                    name: "Programação Front-End",
                    teacher: "Ricardo Favan",
                    color: "#FFABAB"
                },
                {
                    id: 7,
                    name: "Lógica de Programação",
                    teacher: "Luís Hilário",
                    color: "#F6A6FF"
                }
            ],
            notesExample: [
                {
                    id: 1,
                    name: "anotação 1",
                    data: "anotação de aula genérica"
                },
                {
                    id: 2,
                    name: "anotação 2",
                    data: "anotação de aula genérica"
                },
                {
                    id: 3,
                    name: "anotação 3",
                    data: "anotação de aula genérica"
                },
                {
                    id: 4,
                    name: "anotação 4",
                    data: "anotação de aula genérica"
                },
                {
                    id: 5,
                    name: "anotação 5",
                    data: "anotação de aula genérica"
                },
                {
                    id: 6,
                    name: "anotação 6",
                    data: "anotação de aula genérica"
                },
                {
                    id: 7,
                    name: "anotação 7",
                    data: "anotação de aula genérica"
                },
                {
                    id: 8,
                    name: "anotação 8",
                    data: "anotação de aula genérica"
                },
                {
                    id: 9,
                    name: "anotação 9",
                    data: "anotação de aula genérica"
                },
                {
                    id: 10,
                    name: "anotação 10",
                    data: "anotação de aula genérica"
                }
            ]
        }
    }
};

export default Layout(index);
