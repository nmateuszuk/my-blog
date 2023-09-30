import React from 'react'
import { useParams } from 'react-router-dom'
import Blog from './components/pages/blog'
import Login from './components/pages/login'
import ContactUs from './components/pages/contact-us'
import NotFound from 'components/pages/NotFound'

const generatePage=page=> {
  const pageComponents = {
    blog: Blog,
    login: Login,
    'contact-us': ContactUs
  };

    try{
      const component = page in pageComponents ? pageComponents[page] : NotFound; 
      return React.createElement(component)
    }catch(err){
        console.warn(err)
        return React.createElement(NotFound)
    }
}

export default function PageRenderer() {
    const { page } = useParams();

    return generatePage(page)
}