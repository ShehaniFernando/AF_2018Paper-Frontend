import './App.css';
import NavBar from './components/navBar/navBar';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateSubject from './components/createSubject/createSubject';
import Courses from './components/courses/courses';
import CreateCourse from './components/createCourse/createCourse';
import SubjectList from './components/courses/subjectList';

function App() {
  return (
    <div>
      <Router> 
          <NavBar/>
          <section>
            <Switch>     
              <Route path = "/" component={Courses} exact/>
              <Route path = "/create-subject" component={CreateSubject} />
              <Route path = "/create-course" component={CreateCourse} />
              <Route path = "/:id" component = {SubjectList}/>
            </Switch>
          </section>
      </Router>
    </div>
  );
}

export default App;
