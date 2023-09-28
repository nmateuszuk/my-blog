import React from 'react'
import { useParams } from 'react-router-dom'
import Blog from './components/pages/blog'
import Login from './components/pages/login'
import ContactUs from './components/pages/contact-us'

const generatePage=page=> {
  const pageComponents = {
    blog: Blog,
    login: Login,
    'contact-us': ContactUs
  };

    try{
        return React.createElement(pageComponents[page])
    }catch(err){
        console.warn(err)
        return React.createElement(()=>404)
    }
}

export default function PageRenderer() {
    const { page } = useParams();

    return generatePage(page)
}