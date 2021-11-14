import React, {Component} from 'react';
import axios from 'axios'

class Courses extends Component{
    constructor(props){
        super(props);
        this.state = {
            courses: []
        }       
    }

    componentDidMount(){
        axios.get('http://localhost:8089/course/')
        .then(response => {
            this.setState({courses: response.data.data})
          })
        }

    navigaateSubjectPage(e, courseId){
        window.location = `/${courseId}`
    }

    render(){
        return(
            <div className = 'container'>
                <h1> Courses </h1>
                {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                    <div key = {index} className="card mb-3">
                        <div className="p-3" onClick={e => this.navigaateSubjectPage(e, item._id)}>
                            <h5> Course Name : {item.name} </h5>
                            <h5> Lecture: {item.lecture} </h5>
                            <h5> Code: {item.code} </h5>
                            <h5> Pass  Mark: {item.passmark} </h5>
                            <br></br>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Courses;