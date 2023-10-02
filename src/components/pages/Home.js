import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import { Textarea } from '@mui/joy'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import './home.css'

// Dome dummy content
const PHOTOS = [
  {
    imageUrl:
      "https://images.pexels.com/photos/2516406/pexels-photo-2516406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3698534/pexels-photo-3698534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3047993/pexels-photo-3047993.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8979525/pexels-photo-8979525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8979525/pexels-photo-8979525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8979525/pexels-photo-8979525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];


function Home(){
    return (
      <>
      <div className="home">
        <Sidebar/>
        <div className="container-home">
        <Box sx={{ width: 1200, height: 300 }}>
          <Masonry columns={3} spacing={3}>
            {PHOTOS.map((photo) => (
              <li className={`photo-item`}>
              <img src={photo.imageUrl} alt="" />
            </li>
            ))}
          </Masonry>
        </Box>
      </div>
    </div>
    </>);
}

export default Home;