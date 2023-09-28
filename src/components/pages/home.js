import React from 'react'
import Sidebar from '../sidebar/Sidebar';

export default function Home(){
    return (
      
    <section className="home">
      <section>
        <Sidebar/>
      </section>
      <section className="container home">
        <div className="row">
          <h2>Trending posts</h2>
        </div>
      </section>
    </section>)

}