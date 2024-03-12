import './App.css';
import './logo.png';
import Main from './Main';
import Project_List from './Program-List';
import About from './About';
import Blog from './Blog';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import Universitetet from './Universities/Universitetet';
import Contact from './Contact';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn';
import Universitet from './Universitet';
import University_registration from './NewUniversities/University_registration';
import NewUniversity from './NewUniversities/NewUniversity';
import SignUpStudent from './SignUpStudent.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link path='/home' element={<Main />} />
        <Routes>
          <Route index element={<Main />} />
          <Route path='/home' element={<Main />} />
          <Route path='/projectlist/:id' element={<Project_List />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/universitetet' element={<Universitetet />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup-student' element={<SignUpStudent />}/>
          <Route path='/login' element={<LogIn />} />
          <Route path='/universitet/:id' element={<Universitet />} />
          <Route path='/uni-registration' element={<NewUniversity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
