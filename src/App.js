import {BrowserRouter as Router,Route,Routes  } from 'react-router-dom'
import './App.css';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import Projects from './components/pages/Projects';
import NavBar from './components/layout/NavBar';
// import {addDoc, collection, getDocs, updateDoc,doc,deleteDoc} from 'firebase/firestore'
// import{useState,useEffect} from 'react'
// import {db} from './firebase-config'

function App() {
//   const usersColletionsRef=collection(db,"categories")
//   const [categories,setCategories]=useState([])

//   useEffect(()=>{
//    const getUsers=async() => {
//      const data=await getDocs(usersColletionsRef)
//      setCategories(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
//      console.log(data)
//    };
//    getUsers()
//  },[]);
 

  return (
    <div className="App">
     
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/company' element={<Company/>}/>
          <Route exact path='/newproject' element={<NewProject/>}/>
          <Route exact path='/project/:id' element={<Project/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
