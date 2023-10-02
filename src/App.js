
import React from 'react'
import Navigation from './components/topbar/Topbar'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import PageRenderer from './page-renderer';
import Home from 'components/pages/Home';
import Write from './components/writePost/Write';
import PostSingle from './components/post/PostSingle';
import NotFound from 'components/pages/NotFound';

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
            <Route path="/blog/post/:id" element={<PostSingle/>}/>
            <Route path="/"  element={<Home/>}/>
            <Route path="/write"  element={<Write/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
