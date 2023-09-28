
import React from 'react'
import Navigation from './components/navigation'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import PageRenderer from './page-renderer';
import Home from './pages/home';


function App() {

  // const user={
  //   firstName:'Matka',
  //   lastName: 'Anieli'
  // }

  return (
    <Router>
      <div className="App">
        {/* <Navigation user={user}/> */}
        <Navigation/>
        <Routes>
            <Route path="/:page" element={<PageRenderer/>} />
            <Route path="/"  element={<Home/>}/>
            <Route element={()=>404}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
