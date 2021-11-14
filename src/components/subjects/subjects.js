/*//IMPORT REACT
import React, { Component } from 'react';
import axios from 'axios';

//CLASS COMPONENT
class Subjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
            }
    }

    componentDidMount() {
        axios.get('http://localhost:8089/subject').then(response => {
            console.log(response.data.data);
            this.setState({subjects: response.data.data});
        })
    }

//RETURN
render() {
    return (
        <div className="container">
                <h1>Vehicles</h1>
                {this.state.vehicles.length > 0 && this.state.vehicles.map((item, index)=>
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h4>Name : {item.subjectName}</h4>
                            <h4>Description : {item.description}</h4>
                            <h4>Amount : {item.amount}</h4>
                        </div>
                    </div>
                )}
            </div>
    )
  }
}

//EXPORT
export default Subjects;*/