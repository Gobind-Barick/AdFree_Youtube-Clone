import React from 'react'
import {Link }from 'react-router-dom'
import { Stack } from '@mui/material'
//import {logo} from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => 
   (
    <Stack direction="row" alignItems="center" p={3} 
    sx={{background:"#000", top:0, justifyContent:"space-between",position:"sticky" }}>
      <Link to="/" style={{display:"flex" ,alignItems:"center"}}>
        <img src={'https://i.ibb.co/s9Qys2j/logo.png'} alt='logo' height={45}/>
        
      </Link>
            <SearchBar/>
    </Stack>
  )


export default Navbar