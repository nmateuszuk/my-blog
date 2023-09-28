import React from 'react'
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar';

function Home(){
    return (
          <div className="home">
            <Posts />
            <Sidebar />
          </div>
      );
    
}

export default Home;