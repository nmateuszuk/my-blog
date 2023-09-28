import React, {useState} from 'react'
import{Link} from 'react-router-dom';
import { Avatar } from 'antd';
import Sidebar from './sidebar/Sidebar';

const navLinks=[
    {
        title: 'Home',
        path:'/'
    },
    {
        title:'Blog',
        path:'blog'
    },
    {
        title:'Contact Us',
        path: 'contact-us'
    },
    {
        title: 'Login',
        path:'/login'
    }
]

export default function Navigation(){
    const [menuActive, setMenuActive]= useState(false)
    return(
    <nav className="site-navigation" role='navigation'>
        <span className='menu-title' >My blog</span>
        <div className='menu-content-container'>
            <ul>
               {navLinks.map((link,index)=>(
                    <li key={index}>
                      <Link to={link.path}>{link.title}</Link> 
                    </li>
                ))}
            </ul>
            <span>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={45}/>
                {/* <span>{`${user.firstName} ${user.last.Name}`}</span> */}
                <span className='menu-avatar-name'>Matka Anieli</span>
            </span>
            <Sidebar />
        </div>
    </nav>
    )
}