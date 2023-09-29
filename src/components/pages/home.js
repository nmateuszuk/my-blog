import React from 'react'
import Sidebar from '../sidebar/Sidebar';
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


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home(){
    return (
      <section className="home">
      <section>
        <Sidebar/>
      </section>
        <section className="container home">
        <Box sx={{ width: 1200, height: 300 }}>
          <Masonry columns={3} spacing={3}>
            {PHOTOS.map((photo) => (
              <li className={`photo-item`}>
              <img src={photo.imageUrl} alt="" />
            </li>
            ))}
          </Masonry>
        </Box>
      </section>
    </section>)


}

export default Home;